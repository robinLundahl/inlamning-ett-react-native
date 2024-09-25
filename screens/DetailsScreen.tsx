import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { chords } from "../data";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AudioFromSource from "../components/AudioFromSource";
import { Image } from "expo-image";
import { RootStackParamList } from "../navigators/HomeStackNavigator";
import { useContext } from "react";
import { GlobalContext } from "../hooks/useContext";
import Toast from "react-native-toast-message";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { id } = route.params;
  const { favorites, setFavorites } = useContext(GlobalContext);

  const chord = chords.find((chord) => chord.id === id);

  const addToFavorites = () => {
    if (chord) {
      const isAlreadyFavorite = favorites.some((fav) => fav.id === chord.id);

      if (isAlreadyFavorite) {
        alert("The chord already exists in favorites");
      } else {
        const updatedFavorites = [...favorites, chord];
        setFavorites(updatedFavorites);
        Toast.show({
          type: "success",
          text1: "Successfully added the chord!",
        });
        console.log(updatedFavorites);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ padding: 30, fontSize: 20 }}>{chord?.title}</Text>
      <Image source={chord?.image} style={{ height: 200, width: 200 }} />
      {chord?.audio && <AudioFromSource audio={chord.audio} />}
      <TouchableOpacity style={styles.button} onPress={addToFavorites}>
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 20,
    borderStyle: "solid",
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
