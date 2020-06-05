import React from "react";
import { View } from "react-native";
import { Paragraph } from "react-native-paper";
import { styles } from "../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./NavigatorModal";

type ReadingTimerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ReadingTimer"
>;

type Props = {
  navigation: ReadingTimerScreenNavigationProp;
};

const ReadingTimer: React.FC<Props> = () => {
  return (
    <View style={styles.MainContainer}>
      <Paragraph>TODO:</Paragraph>
    </View>
  );
};

export default ReadingTimer;
