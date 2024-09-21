import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { chords } from "../data";
import { StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import AudioFromSource from "../components/AudioFromSource";
import { Image } from "expo-image";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { id } = route.params;

  const chord = chords.find((chord) => chord.id === id);
  return (
    <View style={styles.container}>
      <Text style={{ padding: 30, fontSize: 20 }}>{chord?.title}</Text>
      <Image source={chord?.image} style={{ height: 200, width: 200 }}></Image>
      {chord?.audio && <AudioFromSource audio={chord.audio} />}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
