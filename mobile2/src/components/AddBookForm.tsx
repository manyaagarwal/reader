import React, { Component } from "react";

import {
  TextInput,
  Button,
  RadioButton,
  Text,
  Paragraph,
} from "react-native-paper";
import { View } from "react-native";
import { styles } from "../constants";

import commit from "../mutations/AddBookMutation";

export default class AddBookForm extends Component<{}> {
  state = {
    bookName: "",
    total: "",
    read: "",
    status: "",
  };

  render() {
    const addData = () => {
      this.setState({
        bookName: "",
        total: "",
        read: "",
        status: "",
      });
      commit(
        this.state.bookName,
        Number(this.state.total),
        Number(this.state.read),
        this.state.status
      );
    };
    return (
      <View style={styles.MainContainer}>
        <TextInput
          label="Book Name"
          mode="outlined"
          value={this.state.bookName}
          onChangeText={(text) => this.setState({ bookName: text })}
          accessibilityStates={[]}
        />
        <Paragraph>Status:</Paragraph>
        <RadioButton.Group
          onValueChange={(value) => this.setState({ status: value })}
          value={this.state.status}
        >
          <View style={styles.radiobtn}>
            <RadioButton value="YET_TO_READ" />
            <Text>To-be Read</Text>
          </View>
          <View style={styles.radiobtn}>
            <RadioButton value="READING" />
            <Text>Currently Reading</Text>
          </View>
          <View style={styles.radiobtn}>
            <RadioButton value="COMPLETED" />
            <Text>Finished</Text>
          </View>
        </RadioButton.Group>
        <TextInput
          label="Total Number Of Pages"
          value={this.state.total}
          mode="outlined"
          onChangeText={(text) => this.setState({ total: text })}
          accessibilityStates={[]}
        />
        <TextInput
          label="Number Of Pages Read"
          value={this.state.read}
          mode="outlined"
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
