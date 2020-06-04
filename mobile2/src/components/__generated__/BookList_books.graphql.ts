/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookList_books = {
    readonly books: ReadonlyArray<{
        readonly id: string;
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
(node as any).hash = 'f0b5b317b7e09dc1baeddbe5f68352cf';
export default node;
