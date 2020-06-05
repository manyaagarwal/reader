/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteBookMutationVariables = {
    id: string;
};
export type DeleteBookMutationResponse = {
    readonly deleteBook: {
        readonly id: string;
    } | null;
};
export type DeleteBookMutation = {
    readonly response: DeleteBookMutationResponse;
    readonly variables: DeleteBookMutationVariables;
};



/*
mutation DeleteBookMutation(
  $id: ID!
) {
  deleteBook(id: $id) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "deleteBook",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteBookMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteBookMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteBookMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteBookMutation(\n  $id: ID!\n) {\n  deleteBook(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c569c992b330d6efe578ad4b98d5bff0';
export default node;
