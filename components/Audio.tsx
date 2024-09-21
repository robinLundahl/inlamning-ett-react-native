import { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function AudioFromSource() {
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("../assets/A.wav"));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopSound() {
    const { sound } = await Audio.Sound.createAsync(require("../assets/A.wav"));
    setSound(sound);

    await sound.stopAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
});
