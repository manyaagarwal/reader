/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BookCard_book$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookList_books$ref: FragmentReference;
declare export opaque type BookList_books$fragmentType: BookList_books$ref;
export type BookList_books = {|
  +books: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BookCard_book$ref
  |}>,
  +$refType: BookList_books$ref,
|};
export type BookList_books$data = BookList_books;
export type BookList_books$key = {
  +$data?: BookList_books$data,
  +$fragmentRefs: BookList_books$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '1c7ff5d0baf220b4a1ac0c45d2ea91f7';

module.exports = node;
