import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={24} color={"black"} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name="favorite" size={24} color={"black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
