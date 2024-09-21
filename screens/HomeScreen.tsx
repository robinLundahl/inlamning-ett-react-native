import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
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
      <View>
        <FlatList
          data={chords}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Button
              title={item.title}
              onPress={() => navigation.navigate("Details", { id: item.id })}
            />
          )}
          contentContainerStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: "black",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  chords: {
    flex: 1,
    flexDirection: "row",
  },
});
