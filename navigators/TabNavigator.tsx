// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/HomeScreen";
// import FavoritesScreen from "../screens/FavoritesScreen";
// import React from "react";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackNavigator";
import React from "react";
import FavoritesStackScreen from "./FavoritesStackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
};

// const Tab = createBottomTabNavigator<TabParamList>();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: (props) => (
//             <MaterialCommunityIcons name="home" size={24} color="black" />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={FavoritesScreen}
//         options={{
//           tabBarIcon: (props) => (
//             <MaterialCommunityIcons
//               name="guitar-pick"
//               size={24}
//               color="black"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="guitar-pick"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
