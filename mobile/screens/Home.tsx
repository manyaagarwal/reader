import * as React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import AddBook from "./AddBook";
import { RootStackParamList } from "./NavigatorModal";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AddBook onPress={() => navigation.navigate("AddBookForm")} />
      <Text>Home Screen</Text>
    </View>
  );
};
