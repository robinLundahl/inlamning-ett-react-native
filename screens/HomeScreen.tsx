import React from "react";
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
    <View style={styles.container}>
      <FlatList
        data={chords}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          justifyContent: "space-between",
          marginTop: 60,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
