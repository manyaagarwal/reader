import * as React from "react";
import { View, Text } from "react-native";
import AddBook from "./AddBook";
import { TextInput, Button } from "react-native-paper";


export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AddBook onPress={() => navigation.navigate('AddBookForm')}/>
      <Text>Home Screen</Text>
    </View>
  );
}
