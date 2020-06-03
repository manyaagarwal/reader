import * as React from "react";
import {Card, Paragraph} from "react-native-paper";

// @ts-ignore
export function BookCard({key,book}) {
    return (
        <Card key={key}>
            <Card.Title title={book.name} />
            <Card.Content>
                <Paragraph>{book.currentPageNum} / {book.numPages}</Paragraph>
            </Card.Content>
        </Card>
    );
}

