import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Modalize } from "react-native-modalize";
import { SliderBox } from "react-native-image-slider-box";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

const deviceHeight = Dimensions.get("window").height;
function ItemDetailScreen({ navigation }) {
  const route = useRoute();
  const modalizeRef = React.createRef();
  return (
    <>
      <View
        style={{
          width: "100%",
          height: deviceHeight * 0.07,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          marginTop: Constants.statusBarHeight,
        }}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: 8 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-round-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: deviceHeight * 0.03, fontWeight: "bold" }}>
          Item Details
        </Text>
      </View>
      <View>
        <SliderBox
          images={route.params.item.images}
          sliderBoxHeight={deviceHeight * 0.53}
          dotColor="#5db075"
          inactiveDotColor="#90A4AE"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 3,

            padding: 0,
            margin: 0,
          }}
          paginationBoxStyle={{
            bottom: 10,
          }}
          resizeMode={"cover"}
        />
      </View>
      <Modalize
        ref={modalizeRef}
        onClose={() => modalizeRef.current?.scrollTo(0)}
        alwaysOpen={
          Platform.OS === "ios"
            ? deviceHeight * 0.4 - Constants.statusBarHeight
            : deviceHeight * 0.4
        }
        modalStyle={{ backgroundColor: "#e0e0e0" }}
        modalHeight={deviceHeight * 0.7}
        disableScrollIfPossible
      >
        <View style={{ padding: 7 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: deviceHeight * 0.035,
                fontWeight: "bold",
                width: "65%",
              }}
              numberOfLines={1}
            >
              {route.params.item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="location-on" size={21} color="black" />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: deviceHeight * 0.022,
                }}
              >
                20 km away
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: deviceHeight * 0.03,
              fontWeight: "bold",
              marginTop: "3%",
            }}
          >
            <Text
              style={{
                fontSize: deviceHeight * 0.025,
                fontWeight: "bold",
                color: "#757575",
              }}
            >
              Price :{" "}
            </Text>{" "}
            {route.params.item.price} $
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "3%",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: deviceHeight * 0.022,
                width: "70%",
              }}
              numberOfLines={1}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: deviceHeight * 0.022,
                  color: "#757575",
                }}
              >
                Seller :{" "}
              </Text>{" "}
              {route.params.item.sellerName}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ChatRoom", { user: route.params.item })
              }
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
          <View
            style={{
              height: 1,
              width: "100%",
              alignSelf: "center",
              marginTop: "3%",
              backgroundColor: "#c4c4c4",
            }}
          ></View>
          <Text
            style={{
              fontSize: deviceHeight * 0.025,
              marginTop: "2%",
              textAlign: "justify",
            }}
          >
            Xbox Series X and Series S are upcoming home video game consoles
            developed by Microsoft. They are both scheduled to be released on
            November 10, 2020 as the fourth generation. n Xbox Series X, enjoy
            4K resolution at 60 FPS in campaign and greatly reduced load times
            creating seamless gameplay that ushers in the next generation of
            gaming. Explore the epic expanse of a Halo ring for the first time
            in the most ambitious Halo game ever made.With Smart Delivery, you
            can buy a supported game once and always have the best available
            version for whatever console you play on.
          </Text>
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, top: Constants.statusBarHeight },
});

export default ItemDetailScreen;
