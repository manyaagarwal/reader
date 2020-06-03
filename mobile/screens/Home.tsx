import * as React from "react";
import { View, Text } from "react-native";
import Modal from 'modal-react-native-web';
import FloatingButton from "./FloatingButton";
import AddBook from "./AddBook";


export function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AddBook />
      <FloatingButton />
      <Text>Home Screen</Text>
    </View>
  );
}
