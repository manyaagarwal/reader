import { DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#009fb7ff",
    accent: "#fed766ff",
    background: "#eff1f3ff",
    text: "#272727ff",
    disabled: "#696773ff",
  },
};

export const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 30,
  },
  radiobtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

});
