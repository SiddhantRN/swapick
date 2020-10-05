import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Register from "../Screens/Register";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName={Register}
      screenOptions={{
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;
