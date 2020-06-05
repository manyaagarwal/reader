import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddBookForm from "../components/AddBookForm";
import { Home } from "./Home";
import { AddBook } from "../components/AddBook";
import BookCard from "../components/BookCard";

export type RootStackParamList = {
  Home: undefined;
  AddBookForm: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export function NavigatorModal() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: AddBook }}
      />
      <RootStack.Screen
        name="AddBookForm"
        component={AddBookForm}
        options={{ title: "Add/Update Book" }}
      />
    </RootStack.Navigator>
  );
}
