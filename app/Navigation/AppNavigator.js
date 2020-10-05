import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen";
import AddItemScreen from "../Screens/AddItemScreen";
import MessageScreen from "../Screens/MessageScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import colors from "../config/colors";
import AppStack from "./AppStack";
import ProfileStack from "./ProfileStack";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "ChatRoom") {
      return false;
    } else if (routeName === "ItemDetailScreen") {
      return false;
    } else if (routeName === "EditProfile") {
      return false;
    }

    return true;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: "#eeeeee",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={26}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Add Item"
        component={AddItemScreen}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-box"
              size={26}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Message"
        component={AppStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="chat-bubble"
              size={25}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={27}
              color={focused ? colors.primary : "#9e9e9e"}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
