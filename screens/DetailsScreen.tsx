import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { chords } from "../data";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AudioFromSource from "../components/AudioFromSource";
import { Image } from "expo-image";
import { RootStackParamList } from "../navigators/HomeStackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { id } = route.params;

  const chord = chords.find((chord) => chord.id === id);
  return (
    <View style={styles.container}>
      <Text style={{ padding: 30, fontSize: 20 }}>{chord?.title}</Text>
      <Image source={chord?.image} style={{ height: 200, width: 200 }}></Image>
      {chord?.audio && <AudioFromSource audio={chord.audio} />}
      <TouchableOpacity
        style={styles.pick}
        onPress={() => alert("button was pressed!")}
      >
        <Text style={styles.text}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pick: {
    marginBottom: 20,
    borderStyle: "solid",
    backgroundColor: "skyblue",
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
