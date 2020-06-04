import * as React from "react";
import { View, Text } from "react-native";
import {Button} from "react-native-paper";

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button>Reading Mode</Button>
    </View>
  );
}
