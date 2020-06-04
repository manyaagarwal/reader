import * as React from "react";
import { ScrollView } from "react-native";
import { createFragmentContainer, graphql } from "react-relay";
import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <ScrollView>
      {books.allBooks.edges.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ScrollView>
  );
}

export default createFragmentContainer(BookList, {
  books: graphql`
    fragment BookList_books on Query {
      books {
        ...BookCard_book
      }
    }
  `,
});
