import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import DetailsScreen from "../screens/DetailsScreen";

const FavoritesStack = createNativeStackNavigator();

export default function FavoritesStackNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Tasty chords" component={FavoritesScreen} />
      <FavoritesStack.Screen name="Details" component={DetailsScreen} />
    </FavoritesStack.Navigator>
  );
}
