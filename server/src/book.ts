interface Book {
  id: string;
  name?: string;
  numPages?: number;
  currentPageNum?: number;
  lastReadAt?: Date;
}

type CreateBookInput = Omit<Book, "id">;
type UpdateBookInput = Pick<Book, "id"> & Partial<Omit<Book, "id">>;

export function getAllBooks(): Book[] {
  // TODO:
  return [];
}

export function createBook(input: CreateBookInput): Book {
  // TODO:
  return { id: "stub" };
}

export function updateBook(input: UpdateBookInput): Book {
  // TODO:
  return { id: "stub" };
}

export function deleteBook(id: string): Book {
  // TODO:
  return { id: "stub" };
}
