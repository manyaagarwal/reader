import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorModal } from "./screens/NavigatorModal";
import { Books } from "./screens/Books";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={NavigatorModal} />
        <Tab.Screen name="Books" component={Books} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
