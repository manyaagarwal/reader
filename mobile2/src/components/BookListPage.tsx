import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import { Paragraph, ProgressBar, Colors } from "react-native-paper";
import BookList from "./BookList";
import { BookListPageQuery } from "./__generated__/BookListPageQuery.graphql";
import { appTheme, styles } from "../constants";
import * as Progress from "react-native-progress";
import { View } from "react-native";

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
          <View style={styles.centrePage}>
            <Progress.Circle
              size={30}
              indeterminate={true}
              color={appTheme.colors.primary}
            />
          </View>
        );
      }}
    />
  );
};
