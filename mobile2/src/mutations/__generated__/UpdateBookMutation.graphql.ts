/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type BookStatus = "COMPLETED" | "READING" | "YET_TO_READ" | "%future added value";
export type UpdateBookInput = {
    id: string;
    name?: string | null;
    numPages?: number | null;
    currentPageNum?: number | null;
    lastReadAt?: string | null;
    numSecondsRead?: number | null;
    status?: BookStatus | null;
};
export type UpdateBookMutationVariables = {
    input: UpdateBookInput;
};
export type UpdateBookMutationResponse = {
    readonly updateBook: {
        readonly id: string;
        readonly name: string | null;
        readonly numPages: number | null;
        readonly currentPageNum: number | null;
        readonly status: BookStatus | null;
    } | null;
};
export type UpdateBookMutation = {
    readonly response: UpdateBookMutationResponse;
    readonly variables: UpdateBookMutationVariables;
};



/*
mutation UpdateBookMutation(
  $input: UpdateBookInput!
) {
  updateBook(input: $input) {
    id
    name
    numPages
    currentPageNum
    status
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateBookInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "updateBook",
    "plural": false,
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
        "name": "numPages",
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
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateBookMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateBookMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateBookMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateBookMutation(\n  $input: UpdateBookInput!\n) {\n  updateBook(input: $input) {\n    id\n    name\n    numPages\n    currentPageNum\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = '0c2716746e3abe3bc5aea6ef7121b014';
export default node;
