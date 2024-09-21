import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import React from "react";
import TabNavigator, { TabParamList } from "./TabNavigator";
import { NavigatorScreenParams } from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";

export type RootStackParamList = {
  // Se till att TS känner till alla
  Home: NavigatorScreenParams<TabParamList>;
  Details: { id: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
}
