/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookStatus = "COMPLETED" | "READING" | "YET_TO_READ" | "%future added value";
export type BookCard_book = {
    readonly id: string;
    readonly name: string | null;
    readonly currentPageNum: number | null;
    readonly numPages: number | null;
    readonly status: BookStatus | null;
    readonly " $refType": "BookCard_book";
};
export type BookCard_book$data = BookCard_book;
export type BookCard_book$key = {
    readonly " $data"?: BookCard_book$data;
    readonly " $fragmentRefs": FragmentRefs<"BookCard_book">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookCard_book",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentPageNum",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "numPages",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Book"
};
(node as any).hash = 'd769f087f99b91d9aedb3c59d64371cd';
export default node;
