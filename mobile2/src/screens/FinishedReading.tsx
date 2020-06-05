import * as React from "react";
import { BookListPage } from "../components/BookListPage";

export function FinishedReading({ navigation }) {
  return <BookListPage status="COMPLETED" navigation={navigation} />;
}
