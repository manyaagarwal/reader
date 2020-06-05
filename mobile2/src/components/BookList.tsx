import * as React from "react";
import { ScrollView } from "react-native";
import { createFragmentContainer, graphql } from "react-relay";
import BookCard from "./BookCard";
import { BookList_books } from "./__generated__/BookList_books.graphql";

type Props = {
  books: BookList_books;
  status: string;
};

const BookList: React.FC<Props> = ({ books, navigation, status }) => {
  return (
    <ScrollView>
      {books.books
        ?.filter((book) => book.status == status)
        .map(
          (book) =>
            book && (
              <BookCard
                key={book.id}
                book={book}
                navigation={navigation}
                status={status}
              />
            )
        ) ?? null}
    </ScrollView>
  );
};

export default createFragmentContainer(BookList, {
  books: graphql`
    fragment BookList_books on Query {
      books {
        id
        status
        ...BookCard_book
      }
    }
  `,
});
