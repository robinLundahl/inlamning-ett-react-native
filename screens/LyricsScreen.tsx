import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LyricsStackParamList } from "../navigators/LyricsStackNavigator";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import { useState } from "react";

type Props = NativeStackScreenProps<LyricsStackParamList, "Lyrics">;

export default function LyricsScreen() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [songTitle, setSongTitle] = useState("");

  async function getData(artist: string, title: string) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setLyrics(json.lyrics);
      setSongTitle(title);
      console.log(json);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "We don't have that shitty song in our database, do better."
      );
    }
  }

  const handleSubmit = () => {
    if (artist && title) {
      getData(artist, title);
      setArtist("");
      setTitle("");
      setLyrics("");
      Keyboard.dismiss();
    } else {
      console.error("Both artist and title are required");
      setErrorMessage("Both artist and title are required."); // Felmeddelande för tomma fält
    }
  };

  return (
    <View style={styles.box}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Artist..."
          value={artist}
          onChangeText={setArtist}
        />
        <TextInput
          style={styles.input}
          placeholder="Song..."
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Search for a song</Text>
      </TouchableOpacity>
      {errorMessage ? ( // Visa felmeddelandet om det finns
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      <View style={styles.lyricsContainer}>
        {songTitle ? ( // Rendera låtens titel
          <Text style={styles.songTitleText}>{songTitle}</Text>
        ) : null}
        {lyrics ? (
          <ScrollView>
            <Text style={styles.lyricsText}>{lyrics}</Text>
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    marginBottom: 20,
    borderStyle: "solid",
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lyricsContainer: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    width: "100%",
  },
  lyricsText: {
    flex: 1,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  songTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    padding: 10,
  },
});
