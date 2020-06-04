import * as React from "react";
import { Button, Title } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export function AddBook({ navigation }) {
  return (
    <View style={styles.Header}>
      <Title>Home</Title>
      <Button
        icon="plus"
        mode="text"
        onPress={() => navigation.navigate("AddBookForm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
});
