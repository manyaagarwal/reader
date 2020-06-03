import React, { Component } from "react";

import { Input, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export default class AddBookForm extends Component<{}> {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Input
          placeholder="Book Name"
          onChangeText={value => this.setState({ bookName: value })}
          style={styles.Input}
        />
        <Input
          placeholder="Total Number Of Pages"
          onChangeText={value => this.setState({ total: value })}
          style={styles.Input}
        />
        <Input
          placeholder="Number Of Pages Read"
          onChangeText={value => this.setState({ read: value })}
          style={styles.Input}
        />
        <Button title="Add Book" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    height: 300,
    width: 300
  },
  Input: {
    marginTop: 20
  }
});
