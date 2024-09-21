import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { chords } from "../data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../navigators/TabNavigator";

type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  NativeStackScreenProps<RootStackParamList>
>;

export function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={s.container}>
      <FlatList
        data={chords}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={s.button}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <Text style={s.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between", // Sprider ut kolumnerna horisontellt
          marginBottom: 20, // Vertikalt mellanrum mellan raderna
        }}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
    backgroundColor: "pink", // Rosa bakgrund
    padding: 20,
    margin: 10, // Marginal runt varje knapp för att skapa mer utrymme
    borderRadius: 5, // Runda hörn
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black", // Textfärg
    fontSize: 16,
    fontWeight: "bold",
  },
});
