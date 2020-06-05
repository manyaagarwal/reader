import React, { Component } from "react";
import { graphql, commitMutation } from "react-relay";
import env from "../Environment";
import { TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../constants";
import { buildSchema } from "graphql";

export default class AddBookForm extends Component<{}> {
  state = {
    bookName: "",
    total: "",
    read: ""
  };

  render() {
    const mutation = graphql`
      mutation AddBookFormMutation($input: CreateBookInput!) {
        createBook(input: $input) {
          name
          numPages
          currentPageNum
        }
      }
    `;

    const commit = (name, numPages, currentPageNum) => {
      //Parameters of our mutation
      const variables = {
        input: {
          name,
          numPages,
          currentPageNum
        }
      };
      return new Promise((resolve, reject) => {
        commitMutation(env, {
          //Passing our enviroment
          mutation, //Here we pass our GraphQL mutation
          variables, //Passing our parameters
          onCompleted: (response, errors) => {
            this.setState({
              bookName: "",
              total: "",
              read: ""
            });
            console.log(response);
            resolve(response); // here you can resolve the User connection updated by the mutation and update your render
          },
          onError: err => console.log("An unexpected error occurred", err) // showing an alert to show that something happened in the backend
        });
      });
    };
    const addData = () => {
      console.log("Pressed");
      commit(
        this.state.bookName,
        Number(this.state.total),
        Number(this.state.read)
      );
    };
    return (
      <View style={styles.MainContainer}>
        <TextInput
          label="Book Name"
          value={this.state.bookName}
          onChangeText={text => this.setState({ bookName: text })}
          accessibilityStates={[]}
        />
        <TextInput
          label="Total Number Of Pages"
          value={this.state.total}
          onChangeText={text => this.setState({ total: text })}
          accessibilityStates={[]}
        />
        <TextInput
          label="Number Of Pages Read"
          value={this.state.read}
          onChangeText={text => this.setState({ read: text })}
          accessibilityStates={[]}
        />
        <Button mode="contained" onPress={addData} accessibilityStates={[]}>
          Add Book
        </Button>
      </View>
    );
  }
}
