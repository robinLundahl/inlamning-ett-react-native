import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import DetailsScreen from "../screens/DetailsScreen";

export type FavoriteStackParamList = {
  "Tasty chords": undefined;
  Details: { id: string };
};

const FavoritesStack = createNativeStackNavigator<FavoriteStackParamList>();

export default function FavoritesStackNavigator() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Tasty chords" component={FavoritesScreen} />
      <FavoritesStack.Screen name="Details" component={DetailsScreen} />
    </FavoritesStack.Navigator>
  );
}

// class MyClass {
//   public test?: string;
// }

// const foo: MyClass = new MyClass();

// type MyObject = {
//   test: string;
// };

// const bas = { test: "hello" };
