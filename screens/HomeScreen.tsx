import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { chords } from "../data";

export default function HomeScreen({ navigation }: any) {
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
          marginTop: 60,
          paddingHorizontal: 10,
          paddingBottom: 20,
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
    backgroundColor: "skyblue", // Rosa bakgrund
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
