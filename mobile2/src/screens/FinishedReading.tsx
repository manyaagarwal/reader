import * as React from "react";
import { BookListPage } from "../components/BookListPage";

export function FinishedReading() {
  return <BookListPage status="COMPLETED" />;
}
