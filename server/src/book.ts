import {
  toGlobalId,
  fromGlobalId,
  connectionFromArray,
  ConnectionCursor,
  Connection,
} from "graphql-relay";
import _ from "lodash";
import db from "./db";

/**
 * A book record, as stored by the database.
 */
interface Book {
  id: string;
  name?: string | null;
  numPages?: number | null;
  currentPageNum?: number | null;
  lastReadAt?: string | null; // Lowdb stores dates as strings
}

type CreateBookInput = Omit<Book, "id">;
type UpdateBookInput = Pick<Book, "id"> & Partial<Omit<Book, "id">>;

// Internal/external transformers

/**
 * Book type identifier. Will be embedded in Relay global IDs.
 */
const BOOK_TYPE = "Book";

/**
 * If the Relay global ID is a book ID, returns the book's local ID. Throws
 * otherwise.
 * @param globalId GraphQL layer global ID.
 */
function fromGlobalIdOrThrow(globalId: string): string {
  const localId = fromGlobalId(globalId);
  if (localId.type !== BOOK_TYPE) {
    throw new Error("ID must be a Book ID!");
  }
  return localId.id;
}

function transformToExternalBook(book: Book): Book {
  return {
    ...book,
    id: toGlobalId(BOOK_TYPE, book.id),
  };
}

function transformCreateInputToInternalBook(
  input: CreateBookInput
): Omit<Book, "id"> {
  return {
    ...input,
    lastReadAt: input.lastReadAt
      ? new Date(input.lastReadAt).toISOString()
      : undefined,
  };
}

function transformUpdateInputToInternalBook(input: UpdateBookInput): Book {
  const internalBook: Book = {
    ..._.omitBy(input, _.isUndefined),
    id: fromGlobalIdOrThrow(input.id),
  };

  // Ensure dates are actually dates
  if (input.lastReadAt) {
    internalBook.lastReadAt = new Date(input.lastReadAt).toISOString();
  }

  return internalBook;
}

// Book CRUD

/**
 * A collection of books. Exists so that lodash-id will automatically set IDs
 * for us.
 */
const bookCollection = db.defaults({ books: [] }).get("books");

export function getAllBooks(): Book[] {
  const books: Book[] = bookCollection.value();
  return books.map((book) => transformToExternalBook(book));
}

export function getAllBooksPaginated(
  before: ConnectionCursor,
  after: ConnectionCursor,
  first: number,
  last: number
): Connection<Book> {
  return connectionFromArray(getAllBooks(), { before, after, first, last });
}

export function createBook(input: CreateBookInput): Book {
  // TODO: Fix typings
  const book: Book = (bookCollection as any)
    .insert(transformCreateInputToInternalBook(input))
    .write();
  return transformToExternalBook(book);
}

export function updateBook(input: UpdateBookInput): Book | undefined {
  const bookToBeSaved = transformUpdateInputToInternalBook(input);
  // TODO: Fix typings
  const book: Book | undefined = (bookCollection as any)
    .updateById(bookToBeSaved.id, bookToBeSaved)
    .write();
  return book ? transformToExternalBook(book) : undefined;
}

export function deleteBook(id: string): Book | undefined {
  // TODO: Fix typings
  const book: Book | undefined = (bookCollection as any)
    .removeById(fromGlobalIdOrThrow(id))
    .write();
  return book ? transformToExternalBook(book) : undefined;
}
