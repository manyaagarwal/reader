import * as React from "react";
import { ScrollView } from "react-native";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import BookCard from "./BookCard";

function BookList({books}) {
    return (
        <ScrollView>
            {books.allBooks.edges.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </ScrollView>
    );
}

export default createFragmentContainer(BookList, graphql`
  fragment BookList_books on Book {
    Book(last: 10, orderBy: lastReadAt) @connection(key: "BookList_allBooks", filters: []) {
      edges {
        node { 
          ...BookCard_book
        }
      }
    }
  }
`)

