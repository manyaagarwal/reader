import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorModal } from "./screens/NavigatorModal";
import { Books } from "./screens/Books";
import { appTheme } from "./constants";
import { IconButton } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor = focused
              ? appTheme.colors.primary
              : appTheme.colors.disabled;
            if (route.name === "Home") {
              iconName = focused ? "home-circle" : "home-circle-outline";
            } else if (route.name === "Shelves") {
              iconName = "bookshelf";
            }

            // You can return any component that you like here!
            return <IconButton name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: appTheme.colors.primary,
          inactiveTintColor: appTheme.colors.disabled,
        }}
      >
        <Tab.Screen name="Home" component={NavigatorModal} />
        <Tab.Screen name="Shelves" component={Books} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
