import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./navigators/TabNavigator";
import useAsyncStore from "./hooks/useAsyncStore";
import { Chord } from "./data";

interface ContextValues {
  favorites: Chord[];
  setFavorites: (chords: Chord[]) => void;
}

export const GlobalContext = createContext<ContextValues>({} as ContextValues);

export default function App() {
  const [favorites, setFavorites] = useAsyncStore<Chord[]>("favorites", []);

  return (
    <GlobalContext.Provider value={{ favorites, setFavorites }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <TabNavigator />
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
