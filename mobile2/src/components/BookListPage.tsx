import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import { Paragraph, ProgressBar, Colors } from "react-native-paper";
import BookList from "./BookList";
import { BookListPageQuery } from "./__generated__/BookListPageQuery.graphql";

interface props {
  status: String;
}

export const BookListPage: React.FC<props> = ({ status }) => {
  return (
    <QueryRenderer<BookListPageQuery>
      environment={environment}
      query={graphql`
        query BookListPageQuery{
          ...BookList_books
        }
      `}
      variables={{ status: status }}
      render={({ error, props }) => {
        if (error) {
          return <Paragraph>{error.message}</Paragraph>;
        } else if (props) {
          return <BookList books={props} status={status} />;
        }
        return (
          <ProgressBar
            progress={0.5}
            color={Colors.red800}
            accessibilityStates={[]}
          />
        );
      }}
    />
  );
};
