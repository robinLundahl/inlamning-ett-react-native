import { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

interface AudioFromSourceProps {
  audio: any;
}

export default function AudioFromSource({ audio }: AudioFromSourceProps) {
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopSound() {
    if (sound) {
      console.log("Stopping Sound");
      await sound.stopAsync();
    }
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
