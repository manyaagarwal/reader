/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookCard_book = {
    readonly id: string;
    readonly name: string | null;
    readonly currentPageNum: number | null;
    readonly numPages: number | null;
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
    }
  ],
  "type": "Book"
};
(node as any).hash = 'abbdbe0846392cf95c4549beb0d05922';
export default node;
