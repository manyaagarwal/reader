import React, { Component } from "react";

import { TextInput, Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default class AddBookForm extends Component<{}> {
  state = {
    bookName: "",
    total: "",
    read: ""
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          label="Book Name"
          value={this.state.bookName}
          onChangeText={text => this.setState({ bookName: text })}
        />
        <TextInput
          label="Total Number Of Pages"
          value={this.state.total}
          onChangeText={text => this.setState({ total: text })}
        />
        <TextInput
          label="Number Of Pages Read"
          value={this.state.read}
          onChangeText={text => this.setState({ read: text })}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>Add Book</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 30
  }
});
