import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation UpdateBookMutation($input: UpdateBookInput!) {
    updateBook(input: $input) {
      id
      name
      numPages
      currentPageNum
      status
    }
  }
`;

export default (id, name, numPages, currentPageNum, status, callback) => {
  const variables = {
    input: {
      id: id,
      name: name,
      numPages: numPages,
      currentPageNum: currentPageNum,
      status: status,
    },
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: () => {
      callback();
    },
    onError: (err) => console.error(err),
  });
};
