import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import { Paragraph, ProgressBar, Colors } from "react-native-paper";
import BookList from "./BookList";
import { BookListPageQuery } from "./__generated__/BookListPageQuery.graphql";
import { appTheme } from "../constants";

interface Props {
  status: string;
}

export const BookListPage: React.FC<Props> = ({ status, navigation }) => {
  return (
    <QueryRenderer<BookListPageQuery>
      environment={environment}
      query={graphql`
        query BookListPageQuery {
          ...BookList_books
        }
      `}
      variables={{ status: status }}
      render={({ error, props }) => {
        if (error) {
          return <Paragraph>{error.message}</Paragraph>;
        } else if (props) {
          return (
            <BookList books={props} status={status} navigation={navigation} />
          );
        }
        return (
          <ProgressBar
            progress={0.5}
            color={appTheme.colors.accent}
            accessibilityStates={[]}
          />
        );
      }}
    />
  );
};
