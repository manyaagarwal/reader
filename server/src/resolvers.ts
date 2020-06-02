import { gql, IResolvers } from "apollo-server-express";
import { getAllBooks, createBook, updateBook, deleteBook } from "./book";

// TODO: bookConnection: BookConnection
export const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    numPages: Int
    currentPageNum: Int
    lastReadAt: String
  }

  type Query {
    books: [Book]
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
