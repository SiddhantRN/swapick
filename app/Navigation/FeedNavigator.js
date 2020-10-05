import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import HomeScreen from "../Screens/HomeScreen";
import ItemDetailScreen from "../Screens/ItemDetailScreen";
import ChatRoom from "../Screens/ChatRoom";

const Stack = createStackNavigator();

function FeedNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ItemDetailScreen"
        component={ItemDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({
          title: route.params.user.sellerName,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FeedNavigator;
