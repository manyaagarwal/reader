import * as React from "react";
import { Card, Paragraph } from "react-native-paper";
import { createFragmentContainer, graphql } from "react-relay";

interface Props {
  key: string;
  book: any;
}

const BookCard: React.FC<Props> = ({ key, book }) => {
  return (
    <Card key={key}>
      <Card.Title title={book.name} />
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
