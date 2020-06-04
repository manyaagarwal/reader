import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddBookForm from "./AddBookForm";
import { Home } from "./Home";

const RootStack = createStackNavigator();

export function NavigatorModal() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="AddBookForm" component={AddBookForm} />
    </RootStack.Navigator>
  );
}
