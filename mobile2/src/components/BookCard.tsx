import * as React from "react";
import { Card, Paragraph } from "react-native-paper";
import { createFragmentContainer, graphql } from "react-relay";
import { BookCard_book } from "./__generated__/BookCard_book.graphql";

interface Props {
  key: string;
  book: BookCard_book;
}

const BookCard: React.FC<Props> = ({ key, book }) => {
  return (
    <Card key={key} accessibilityStates={[]}>
      <Card.Title title={book.name} accessibilityStates={[]} />
      <Card.Content>
        <Paragraph>
          {book.currentPageNum} / {book.numPages}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default createFragmentContainer(BookCard, {
  book: graphql`
    fragment BookCard_book on Book {
      id
      name
      currentPageNum
      numPages
    }
  `,
});
