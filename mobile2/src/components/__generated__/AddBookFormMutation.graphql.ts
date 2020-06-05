/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type BookStatus = "COMPLETED" | "READING" | "YET_TO_READ" | "%future added value";
export type CreateBookInput = {
    name?: string | null;
    numPages?: number | null;
    currentPageNum?: number | null;
    lastReadAt?: string | null;
    numSecondsRead?: number | null;
    status?: BookStatus | null;
};
export type AddBookFormMutationVariables = {
    input: CreateBookInput;
};
export type AddBookFormMutationResponse = {
    readonly createBook: {
        readonly name: string | null;
        readonly numPages: number | null;
        readonly currentPageNum: number | null;
    } | null;
};
export type AddBookFormMutation = {
    readonly response: AddBookFormMutationResponse;
    readonly variables: AddBookFormMutationVariables;
};



/*
mutation AddBookFormMutation(
  $input: CreateBookInput!
) {
  createBook(input: $input) {
    name
    numPages
    currentPageNum
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateBookInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "numPages",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentPageNum",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddBookFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "createBook",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddBookFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "createBook",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "AddBookFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddBookFormMutation(\n  $input: CreateBookInput!\n) {\n  createBook(input: $input) {\n    name\n    numPages\n    currentPageNum\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '24ad0d686558a16aafecfbce36b9c0f0';
export default node;
