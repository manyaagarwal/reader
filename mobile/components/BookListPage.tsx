import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import { Paragraph, ProgressBar, Colors } from "react-native-paper";
import BookList from "./BookList";

const BookListPageQuery = graphql`
  query BookListPageQuery {
    ...BookList_books
  }
`;

export function BookListPage() {
  return (
    <QueryRenderer
      environment={environment}
      query={BookListPageQuery}
      render={({ error, props }) => {
        if (error) {
          return <Paragraph>{error.message}</Paragraph>;
        } else if (props) {
          return <BookList books={props.books} />;
        }
        return <ProgressBar progress={0.5} color={Colors.red800} />;
      }}
    />
  );
}
