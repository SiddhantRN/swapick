import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import MessageScreen from "../Screens/MessageScreen";
import ChatRoom from "../Screens/ChatRoom";
import HomeScreen from "../Screens/HomeScreen";
import ItemDetailScreen from "../Screens/ItemDetailScreen";

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={MessageScreen}
      screenOptions={{
        gestureDirection: "horizontal",

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
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


export default AppStack;
