import * as React from "react";
import { View, Text } from "react-native";
import { FAB } from "react-native-paper";
import { styles } from "../constants";

export function FinishedReading({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Finished Reading</Text>
    </View>
  );
}
