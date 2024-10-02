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
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useForm, Controller, Form } from "react-hook-form";

type Props = NativeStackScreenProps<LyricsStackParamList, "Lyrics">;

interface FormData {
  artist: string;
  title: string;
}

export default function LyricsScreen() {
  const [lyrics, setLyrics] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<FormData>();

  async function getData(artist: string, title: string) {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setLyrics(json.lyrics);
      setSongTitle(title);
    } catch (error) {
      setErrorMessage("We don't have that song in our database.");
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (data: FormData) => {
    if (data.artist && data.title) {
      getData(data.artist, data.title);
      reset();
      setErrorMessage("");
      Keyboard.dismiss();
    } else {
      setErrorMessage("Both artist and title are required.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        style={styles.box}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Controller
            control={control}
            name="artist"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Artist..."
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="title"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Title..."
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Get Lyrics</Text>
          </TouchableOpacity>
        </View>

        <View>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="skyblue"
              style={{ marginTop: 20 }}
            />
          ) : errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : (
            <View style={styles.lyricsContainer}>
              {songTitle ? (
                <Text style={styles.songTitleText}>{songTitle}</Text>
              ) : null}
              {lyrics ? <Text style={styles.lyricsText}>{lyrics}</Text> : null}
            </View>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 20,
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
    backgroundColor: "skyblue",
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  lyricsContainer: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    width: "100%",
  },
  lyricsText: {
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
