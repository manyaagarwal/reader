import * as React from "react";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { styles } from "../constants";
import { BookListPage } from "../components/BookListPage";

export function FinishedReading() {
  return <BookListPage status="COMPLETED" />;
}
