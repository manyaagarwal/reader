import React, { Component } from "react";
import * as Progress from "react-native-progress";

import {
  TextInput,
  Button,
  RadioButton,
  Text,
  Paragraph,
} from "react-native-paper";
import { View } from "react-native";
import { appTheme, styles } from "../constants";

import commit from "../mutations/AddBookMutation";
import DeleteBookMutation from "../mutations/DeleteBookMutation";
import UpdateBookMutation from "../mutations/UpdateBookMutation";

interface Props {
  route: any; //change type
  navigation: any;
}

export default class AddBookForm extends Component<Props> {
  state = {
    bookName: "",
    total: "",
    read: "",
    status: "",
  };

  componentDidMount(): void {
    const { id, book } = this.props.route.params;
    console.log(book);
    if (id) {
      this.setState({
        bookName: book.name,
        total: book.numPages.toString(),
        read: book.currentPageNum.toString(),
        status: book.status,
      });
    }
  }

  render() {
    const addData = () => {
      const { id } = this.props.route.params;
      const { status, total, read, bookName } = this.state;
      if (id) {
        UpdateBookMutation(
          id,
          bookName,
          Number(total),
          Number(read),
          status,
          () => this.props.navigation.goBack()
        );
        return (
          <Progress.Circle
            size={30}
            indeterminate={true}
            color={appTheme.colors.accent}
          />
        );
      } else {
        commit(
          this.state.bookName,
          Number(this.state.total),
          Number(this.state.read),
          this.state.status
        );
      }
      this.setState({
        bookName: "",
        total: "",
        read: "",
        status: "",
      });
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
