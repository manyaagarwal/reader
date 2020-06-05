/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookListPageQueryVariables = {};
export type BookListPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BookList_books">;
};
export type BookListPageQuery = {
    readonly response: BookListPageQueryResponse;
    readonly variables: BookListPageQueryVariables;
};



/*
query BookListPageQuery {
  ...BookList_books
}

fragment BookCard_book on Book {
  id
  name
  currentPageNum
  numPages
  status
}

fragment BookList_books on Query {
  books {
    id
    status
    ...BookCard_book
  }
}
*/

const node: ConcreteRequest = {
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
            "name": "status",
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
    "text": "query BookListPageQuery {\n  ...BookList_books\n}\n\nfragment BookCard_book on Book {\n  id\n  name\n  currentPageNum\n  numPages\n  status\n}\n\nfragment BookList_books on Query {\n  books {\n    id\n    status\n    ...BookCard_book\n  }\n}\n"
  }
};
(node as any).hash = '61b30ea468f7b72aea919f212275858b';
export default node;
