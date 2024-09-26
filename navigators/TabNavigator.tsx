import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackNavigator";
import React from "react";
import FavoritesStackScreen from "./FavoritesStackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="guitar-pick"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
