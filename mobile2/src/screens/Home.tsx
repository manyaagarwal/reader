import * as React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./NavigatorModal";
import { BookListPage } from "../components/BookListPage";
import { FAB } from "react-native-paper";
import { styles } from "../constants";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <BookListPage status="READING" />
      <FAB
        style={styles.fab}
        label="Start Reading"
        onPress={() => navigation.navigate("ReadingTimer")}
      />
    </View>
  );
};
