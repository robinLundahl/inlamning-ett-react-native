import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Children, createContext, PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "../navigators/TabNavigator";
import useAsyncStore from "./useAsyncStore";
import { Chord } from "../data";

interface ContextValues {
  favorites: Chord[];
  setFavorites: (chords: Chord[]) => void;
}

export const GlobalContext = createContext<ContextValues>({} as ContextValues);

export default function FavoritesProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useAsyncStore<Chord[]>("favorites", []);

  return (
    <GlobalContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
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
