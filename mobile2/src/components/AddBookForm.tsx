import React, { Component } from "react";

import { TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../constants";
import commit from "../mutations/AddBookMutation";

export default class AddBookForm extends Component<{}> {
  state = {
    bookName: "",
    total: "",
    read: "",
  };

  render() {
    const addData = () => {
      this.setState({
        bookName: "",
        total: "",
        read: "",
      });
      commit(this.state.bookName, this.state.total, this.state.read);
    };
    return (
      <View style={styles.MainContainer}>
        <TextInput
          label="Book Name"
          value={this.state.bookName}
          onChangeText={(text) => this.setState({ bookName: text })}
          accessibilityStates={[]}
        />
        <TextInput
          label="Total Number Of Pages"
          value={this.state.total}
          onChangeText={(text) => this.setState({ total: text })}
          accessibilityStates={[]}
        />
        <TextInput
          label="Number Of Pages Read"
          value={this.state.read}
          onChangeText={(text) => this.setState({ read: text })}
          accessibilityStates={[]}
        />
        <Button mode="contained" onPress={addData} accessibilityStates={[]}>
          Add Book
        </Button>
      </View>
    );
  }
}
