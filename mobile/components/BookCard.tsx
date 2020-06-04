import * as React from "react";
import {Card, Paragraph} from "react-native-paper";
// @ts-ignore
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

// @ts-ignore
function BookCard({key,book}) {
    return (
        <Card>
            <Card.Title title={book.name} />
            <Card.Content>
                <Paragraph>{book.currentPageNum} / {book.numPages}</Paragraph>
            </Card.Content>
        </Card>
    );
}

export default createFragmentContainer(BookCard, graphql`
  fragment BookCard_book on BookCard {
    id
    name
    currentPageNum
    numPages
  }
`)