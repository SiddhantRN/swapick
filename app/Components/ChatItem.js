import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ScreenHeight = Dimensions.get("window").height;

function ChatItem({ user }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatRoom", { user: user })}
    >
      <View style={styles.container}>
        <Image source={user.image} style={styles.userImage} />
        <View style={styles.infoBox}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.name} numberOfLines={1}>
              {user.sellerName}
            </Text>
            <Text style={styles.date}>{user.time}</Text>
          </View>
          <Text style={styles.message} numberOfLines={2}>
            {user.message}
          </Text>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#757575",
              marginTop: 5,
            }}
          ></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    alignItems: "center",
  },

  infoBox: {
    // backgroundColor: "#c4c4c4",
    paddingHorizontal: 5,
    paddingLeft: 8,
    flex: 1,
    justifyContent: "space-around",
  },
  name: {
    width: "65%",
    fontWeight: "bold",
    fontSize: 18,
  },
  message: {
    fontSize: 16,
    textAlign: "left",
  },

  date: {
    color: "#757575",
    fontSize: 18,
  },
  userImage: {
    height: ScreenHeight * 0.09,
    width: ScreenHeight * 0.09,
    borderRadius: ScreenHeight * 0.06,
    borderWidth: 1,
    borderColor: "#616161",
  },
});

export default ChatItem;
