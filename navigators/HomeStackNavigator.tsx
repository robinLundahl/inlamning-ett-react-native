import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import DetailsScreen from "../screens/DetailsScreen";

export type RootStackParamList = {
  HomeView: undefined;
  Details: { id: string };
};

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeView"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerBackTitle: "Back" }}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}
