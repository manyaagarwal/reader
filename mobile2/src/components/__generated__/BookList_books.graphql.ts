/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookStatus = "COMPLETED" | "READING" | "YET_TO_READ" | "%future added value";
export type BookList_books = {
    readonly books: ReadonlyArray<{
        readonly id: string;
        readonly status: BookStatus | null;
        readonly " $fragmentRefs": FragmentRefs<"BookCard_book">;
    } | null> | null;
    readonly " $refType": "BookList_books";
};
export type BookList_books$data = BookList_books;
export type BookList_books$key = {
    readonly " $data"?: BookList_books$data;
    readonly " $fragmentRefs": FragmentRefs<"BookList_books">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookList_books",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Book",
      "kind": "LinkedField",
      "name": "books",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BookCard_book"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '550d37ca43e021907e25f55428afb931';
export default node;
