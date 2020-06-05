import * as React from "react";
import { BookListPage } from "../components/BookListPage";

export function ToBeRead({ navigation }) {
  return <BookListPage status="YET_TO_READ" navigation={navigation} />;
}
