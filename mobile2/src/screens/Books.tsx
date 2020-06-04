import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FinishedReading } from "./FinishedReading";
import { ToBeRead } from "./Tbr";
import {styles} from "../constants";
import {FAB} from "react-native-paper";

const Tab = createMaterialTopTabNavigator();

export function Books({navigation}) {
  return (
  <>
    <Tab.Navigator>
      <Tab.Screen name="Finished Reading" component={FinishedReading} />
      <Tab.Screen name="To Be Read" component={ToBeRead} />
    </Tab.Navigator>
      <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate("AddBookForm")}
      />
  </>
  );
}
