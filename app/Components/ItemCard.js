import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";

const Screen_height = Dimensions.get("window").height;

function ItemCard({
  name,
  price,
  sellerName,
  distance,
  image,
  item,
  description,
}) {
  const [bookmark, setBookmark] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            width: "70%",
            fontSize: Screen_height * 0.035,
          }}
          numberOfLines={1}
        >
          {name}
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", right: 10, top: -3 }}
          onPress={() => setBookmark(!bookmark)}
        >
          {!bookmark ? (
            <FontAwesome name="bookmark-o" size={34} color={colors.primary} />
          ) : (
            <FontAwesome name="bookmark" size={34} color={colors.primary} />
          )}
        </TouchableOpacity>
      </View>
      <Image
        style={{ height: "50%", width: "100%" }}
        source={{
          uri: image,
        }}
        resizeMode={"contain"}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Screen_height * 0.025,
              color: "#757575",
            }}
          >
            Price :{" "}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: Screen_height * 0.03 }}>
            {price}$
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="location-on" size={21} color="black" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Screen_height * 0.022,
            }}
          >
            {distance} km away
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Screen_height * 0.022,
            width: "70%",
          }}
          numberOfLines={1}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Screen_height * 0.022,
              color: "#757575",
            }}
          >
            Seller :{" "}
          </Text>{" "}
          {sellerName}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("ChatRoom", { user: item })}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "#000",
          fontSize: Screen_height * 0.02,
          marginTop: "3%",
          flex: 0.8,
        }}
        numberOfLines={6}
      >
        <Text style={{ color: "#757575", fontWeight: "bold" }}>
          Description:{" "}
        </Text>
        {description}
      </Text>

      <TouchableOpacity
        style={{ position: "absolute", bottom: 5, right: 10 }}
        onPress={() => navigation.navigate("ItemDetailScreen", { item: item })}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          Know More..
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "#e0e0e0",

    borderWidth: 1,
    height: "100%",
    width: "100%",
  },
});

export default ItemCard;
