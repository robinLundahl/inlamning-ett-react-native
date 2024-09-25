import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Chord } from "../data";
import React, { useContext, useState } from "react";
import AudioFromSource from "../components/AudioFromSource";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FavoriteStackParamList } from "../navigators/FavoritesStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalContext } from "../hooks/useContext";

type Props = NativeStackScreenProps<FavoriteStackParamList, "Tasty chords">;

export default function FavoritesScreen(props: Props) {
  const { favorites, setFavorites } = useContext(GlobalContext);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((chord) => chord.id !== id);
    setFavorites(updatedFavorites);
  };

  const renderItem = ({ item }: { item: Chord }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Chord: {item.title}</Text>
      <Image
        source={{ uri: item.image }}
        style={{ height: 100, width: 100 }}
      ></Image>
      {item?.audio && <AudioFromSource audio={item.audio} />}
      <MaterialCommunityIcons
        name="delete"
        size={24}
        color="black"
        onPress={() => removeFavorite(item.id)}
      />
    </View>
  );
  console.log(favorites);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            justifyContent: "space-around",
            paddingBottom: 20,
          }}
        />
      ) : (
        <Text style={styles.noFavoritesText}>No favorite chords added.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 14,
  },
  noFavoritesText: {
    fontSize: 16,
    color: "gray",
  },
});
