import { toGlobalId, fromGlobalId } from "graphql-relay";
import db from "./db";

/**
 * A book record, as stored by the database.
 */
interface Book {
  id: string;
  name?: string;
  numPages?: number;
  currentPageNum?: number;
  lastReadAt?: Date;
}

/**
 * The book record exposed to our GraphQL clients.
 */
type ExternalBook = Omit<Book, "lastReadAt"> & {
  lastReadAt?: string;
};

type CreateBookInput = Omit<ExternalBook, "id">;
type UpdateBookInput = Pick<ExternalBook, "id"> &
  Partial<Omit<ExternalBook, "id">>;

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

function transformToExternalBook(book: Book): ExternalBook {
  return {
    ...book,
    id: toGlobalId(BOOK_TYPE, book.id),
    lastReadAt: book.lastReadAt?.toISOString(),
  };
}

function transformCreateInputToInternalBook(
  input: CreateBookInput
): Omit<Book, "id"> {
  return {
    ...input,
    lastReadAt: input.lastReadAt ? new Date(input.lastReadAt) : undefined,
  };
}

function transformUpdateInputToInternalBook(input: UpdateBookInput): Book {
  return {
    ...input,
    id: fromGlobalIdOrThrow(input.id),
    lastReadAt: input.lastReadAt ? new Date(input.lastReadAt) : undefined,
  };
}

// Book CRUD

/**
 * A collection of books. Exists so that lodash-id will automatically set IDs
 * for us.
 */
const bookCollection = db.defaults({ books: [] }).get("books");

export function getAllBooks(): ExternalBook[] {
  const books: Book[] = bookCollection.value();
  return books.map((book) => transformToExternalBook(book));
}

export function createBook(input: CreateBookInput): ExternalBook {
  // TODO: Fix typings
  const book: Book = (bookCollection as any)
    .insert(transformCreateInputToInternalBook(input))
    .write();
  return transformToExternalBook(book);
}

export function updateBook(input: UpdateBookInput): ExternalBook | undefined {
  const bookToBeSaved = transformUpdateInputToInternalBook(input);
  // TODO: Fix typings
  const book: Book | undefined = (bookCollection as any)
    .updateById(bookToBeSaved.id, bookToBeSaved)
    .write();
  return book ? transformToExternalBook(book) : undefined;
}

export function deleteBook(id: string): ExternalBook | undefined {
  // TODO: Fix typings
  const book: Book | undefined = (bookCollection as any)
    .removeById(fromGlobalIdOrThrow(id))
    .write();
  return book ? transformToExternalBook(book) : undefined;
}
