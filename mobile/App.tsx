import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import Navigation from "./Navigation";
import {appTheme} from "./constants";

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <StatusBar backgroundColor={appTheme.colors.primary}/>
        <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
