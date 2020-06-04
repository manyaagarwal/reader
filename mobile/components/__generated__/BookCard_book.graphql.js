/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookCard_book$ref: FragmentReference;
declare export opaque type BookCard_book$fragmentType: BookCard_book$ref;
export type BookCard_book = {|
  +id: string,
  +name: ?string,
  +currentPageNum: ?number,
  +numPages: ?number,
  +$refType: BookCard_book$ref,
|};
export type BookCard_book$data = BookCard_book;
export type BookCard_book$key = {
  +$data?: BookCard_book$data,
  +$fragmentRefs: BookCard_book$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = 'abbdbe0846392cf95c4549beb0d05922';

module.exports = node;
