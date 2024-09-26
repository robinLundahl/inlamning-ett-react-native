import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LyricsScreen from "../screens/LyricsScreen";

export type LyricsStackParamList = {
  Lyrics: undefined;
};

const LyricsStack = createNativeStackNavigator<LyricsStackParamList>();

export default function FavoritesStackNavigator() {
  return (
    <LyricsStack.Navigator>
      <LyricsStack.Screen name="Lyrics" component={LyricsScreen} />
    </LyricsStack.Navigator>
  );
}
