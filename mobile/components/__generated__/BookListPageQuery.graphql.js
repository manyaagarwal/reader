/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookList_books$ref = any;
export type BookListPageQueryVariables = {||};
export type BookListPageQueryResponse = {|
  +$fragmentRefs: BookList_books$ref
|};
export type BookListPageQuery = {|
  variables: BookListPageQueryVariables,
  response: BookListPageQueryResponse,
|};
*/


/*
query BookListPageQuery {
  ...BookList_books
}

fragment BookCard_book on Book {
  id
  name
  currentPageNum
  numPages
}

fragment BookList_books on Query {
  books {
    ...BookCard_book
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookListPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "BookList_books"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BookListPageQuery",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "BookListPageQuery",
    "operationKind": "query",
    "text": "query BookListPageQuery {\n  ...BookList_books\n}\n\nfragment BookCard_book on Book {\n  id\n  name\n  currentPageNum\n  numPages\n}\n\nfragment BookList_books on Query {\n  books {\n    ...BookCard_book\n    id\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '61b30ea468f7b72aea919f212275858b';

module.exports = node;
