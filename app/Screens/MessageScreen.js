import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";
import Constant from "expo-constants";
import ChatItem from "../Components/ChatItem";

const ScreenHeight = Dimensions.get("window").height;
const contacts = [
  {
    id: 0,
    sellerName: "Alex P.",
    time: "12:13PM",
    image: require("../assets/users/user1.png"),

    message:
      "Hey there , I am interested in buying this item,please let me know if its still available,I'll be happy to come and pick it up",
  },
  {
    id: 1,
    sellerName: "Siddhant Shrivastava",
    time: "8:13AM",
    image: require("../assets/users/user2.png"),

    message:
      "Greetings , you have a good collection of books , I too love reading books!!",
  },
  {
    id: 2,
    sellerName: "Mellisa S.",
    time: "2:30PM",
    image: require("../assets/users/user3.png"),

    message:
      "Hi , I would love to buy some of the books you have listed please let me know around which date they can be delivered",
  },
];

function MessageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: ScreenHeight * 0.03 }}>
          Messages
        </Text>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(contact) => contact.id.toString()}
        renderItem={({ item }) => <ChatItem user={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Constant.statusBarHeight,
  },
  header: {
    height: ScreenHeight * 0.08,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageScreen;
