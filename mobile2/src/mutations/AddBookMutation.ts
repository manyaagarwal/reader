import { graphql, commitMutation } from "react-relay";
import env from "../Environment";

const mutation = graphql`
  mutation AddBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      name
      numPages
      currentPageNum
      status
    }
  }
`;

const commit = (name, numPages, currentPageNum, status) => {
  console.log(numPages);
  //Parameters of our mutation
  const variables = {
    input: {
      name,
      numPages,
      currentPageNum,
      status,
    },
  };
  return new Promise((resolve, reject) => {
    commitMutation(env, {
      //Passing our enviroment
      mutation, //Here we pass our GraphQL mutation
      variables, //Passing our parameters
      onCompleted: (response, errors) => {
        resolve(response); // here you can resolve the User connection updated by the mutation and update your render
      },
      onError: (err) => console.log("An unexpected error occurred", err), // showing an alert to show that something happened in the backend
    });
  });
};

export default commit;
