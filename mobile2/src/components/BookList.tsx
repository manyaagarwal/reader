import * as React from "react";
import { ScrollView } from "react-native";
import { createFragmentContainer, graphql } from "react-relay";
import BookCard from "./BookCard";
import { BookList_books } from "./__generated__/BookList_books.graphql";

type Props = {
  books: BookList_books;
  status: String;
};

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <ScrollView>
      {books.books?.map(
        (book) => book && <BookCard key={book.id} book={book} />
      ) ?? null}
    </ScrollView>
  );
};

export default createFragmentContainer(BookList, {
  books: graphql`
    fragment BookList_books on Query {
      books{
        id
        ...BookCard_book
      }
    }
  `,
});
