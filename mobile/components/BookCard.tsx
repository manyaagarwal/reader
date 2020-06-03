import * as React from "react";
import { Card, Paragraph } from "react-native-paper";

interface Props {
  key: string;
  book: any;
}

export const BookCard: React.FC<Props> = ({ key, book }) => {
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
}
