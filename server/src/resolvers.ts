import { gql, IResolvers } from "apollo-server-express";
import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getAllBooksPaginated,
} from "./book";

export const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type BookConnection {
    pageInfo: PageInfo!
    edges: [BookEdge!]!
  }

  type BookEdge {
    node: Book!
    cursor: String!
  }

  type Query {
    books: [Book]
    bookConnection(
      before: String
      after: String
      first: Int
      last: Int
    ): BookConnection!
  }

  input CreateBookInput {
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
  }

  input UpdateBookInput {
    id: ID!
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
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
    bookConnection: (_, { before, after, first, last }) =>
      getAllBooksPaginated(before, after, first, last),
  },

  Mutation: {
    createBook: (
      _,
      { input: { name, numPages, currentPageNum, lastReadAt } }
    ) => createBook({ name, numPages, currentPageNum, lastReadAt }),

    updateBook: (
      _,
      { input: { id, name, numPages, currentPageNum, lastReadAt } }
    ) => updateBook({ id, name, numPages, currentPageNum, lastReadAt }),

    deleteBook: (_, { id }) => deleteBook(id),
  },
};
