import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import Navigation from "./Navigation";
import { appTheme } from "./constants";

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <StatusBar backgroundColor={appTheme.colors.primary} />
      <Navigation />
    </PaperProvider>
  );
}
