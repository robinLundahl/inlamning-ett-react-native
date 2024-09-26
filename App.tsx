import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import TabNavigator from "./navigators/TabNavigator";
import FavoritesProvider from "./hooks/useContext";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <TabNavigator />
      </NavigationContainer>
      <Toast />
    </FavoritesProvider>
  );
}
