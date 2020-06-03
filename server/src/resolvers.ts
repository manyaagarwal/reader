import { gql, IResolvers } from "apollo-server-express";
import { getAllBooks, createBook, updateBook, deleteBook } from "./book";

// TODO: bookConnection: BookConnection
export const typeDefs = gql`
  enum BookStatus {
    YET_TO_READ
    READING
    COMPLETED
  }

  type Book {
    id: ID!
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
    numSecondsRead: Int
    status: BookStatus
  }

  type Query {
    books: [Book]
  }

  input CreateBookInput {
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
    numSecondsRead: Int
    status: BookStatus
  }

  input UpdateBookInput {
    id: ID!
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
    numSecondsRead: Int
    status: BookStatus
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book
    updateBook(input: UpdateBookInput!): Book
    deleteBook(id: ID!): Book
  }
`;

export const resolvers: IResolvers = {
  Query: {
    books: () => getAllBooks(),
  },

  Mutation: {
    createBook: (
      _,
      {
        input: {
          name,
          numPages,
          currentPageNum,
          lastReadAt,
          numSecondsRead,
          status,
        },
      }
    ) =>
      createBook({
        name,
        numPages,
        currentPageNum,
        lastReadAt,
        numSecondsRead,
        status,
      }),

    updateBook: (
      _,
      {
        input: {
          id,
          name,
          numPages,
          currentPageNum,
          lastReadAt,
          numSecondsRead,
          status,
        },
      }
    ) =>
      updateBook({
        id,
        name,
        numPages,
        currentPageNum,
        lastReadAt,
        numSecondsRead,
        status,
      }),

    deleteBook: (_, { id }) => deleteBook(id),
  },
};
