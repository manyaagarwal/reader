import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation DeleteBookMutation($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export default (id, callback) => {
  // 4
  const variables = {
    id: id,
  };

  // 5
  commitMutation(environment, {
    mutation,
    variables,

    updater: (store) => {
      const payload = store.getRootField("deleteBook");
      const id = payload._dataID;
      store.delete(id);
    },
    onCompleted: () => {
      callback();
    },
    onError: (err) => console.error(err),
  });
};
