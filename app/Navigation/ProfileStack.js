import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import ProfileScreen from "../Screens/ProfileScreen";
import EditProfile from "../Screens/EditProfile";

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName={ProfileScreen}
      screenOptions={{
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileStack;
