import React, { useState, useRef } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppCategories from "../Components/AppCategories";

import colors from "../config/colors";
import ItemCard from "../Components/ItemCard";

const Screen_height = Dimensions.get("window").height;
const Screen_width = Dimensions.get("window").width;

const Categories = [
  {
    id: 1,
    label: "Books",
    icon: require("../assets/icons/books.png"),
    color: "#69F0AE",
  },

  {
    id: 2,
    label: "Electronics",
    icon: require("../assets/icons/phone.png"),
    color: "#ffff00",
  },
];

const Items = [
  {
    id: 1,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276020/FirstClient/Items/5df3a184fd9db222d0026954_gzgbyp.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601305988/FirstClient/Items/1_mqduzn.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601305986/FirstClient/Items/5e6f8d3ec485402d027da6ca_mavnnk.jpg",
    ],
    name: "X box Series X",

    sellerName: "Siddhant Shrivastava",
    image: require("../assets/users/user2.png"),

    message:
      "Greetings , you have a good collection of books , I too love reading books!!",
    price: "400",
    distance: "27",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
  {
    id: 2,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601306239/FirstClient/Items/sony-playstation-5-black-version_lo5lci.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276020/FirstClient/Items/xWZMNYm_x72bdb.jpg",
    ],
    name: "Play Station 5",
    image: require("../assets/users/user2.png"),

    message:
      "Greetings , you have a good collection of books , I too love reading books!!",
    sellerName: "Siddhant Shrivastava",
    price: "500",
    distance: "7",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
  {
    id: 3,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276422/FirstClient/Items/corona-fehlalarm_3D-1_yopqas.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276422/FirstClient/Items/39284050_9783991093497_xl_xa0edn.jpg",
    ],
    name: "Corona Fehlalarm",
    sellerName: "Alex P.",
    image: require("../assets/users/user1.png"),

    message:
      "Hey there , I am interested in buying this item,please let me know if its still available,I'll be happy to come and pick it up",
    price: "5",
    distance: "20",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
  {
    id: 4,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276422/FirstClient/Items/image-asset_coqwi1.png",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276423/FirstClient/Items/StartWithWhy-900x592_id6q6y.jpg",
    ],
    name: "Start With Why",

    sellerName: "Alex P.",
    image: require("../assets/users/user1.png"),

    message:
      "Hey there , I am interested in buying this item,please let me know if its still available,I'll be happy to come and pick it up",
    price: "9",
    distance: "17",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
  {
    id: 5,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276024/FirstClient/Items/ipad-pro-11-select-wifi-spacegray-202003_FMT_WHH_rxl1by.jpg",

      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276021/FirstClient/Items/238667173alt3_ncqfcp.jpg",
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601276020/FirstClient/Items/5hhPYeuQYgSmPNqZFfaQgE-1200-80_ywuopf.jpg",
    ],
    name: "I-Pad Pro",
    sellerName: "Mellisa S.",
    image: require("../assets/users/user3.png"),

    message:
      "Hi , I would love to buy some of the books you have listed please let me know around which date they can be delivered",
    price: "900",
    distance: "23",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
  {
    id: 6,
    images: [
      "https://res.cloudinary.com/dy71m2dro/image/upload/v1601306338/FirstClient/Items/s-l400_v9tglc.jpg",
    ],
    name: "Art Of War",
    sellerName: "Mellisa S.",
    image: require("../assets/users/user3.png"),

    message:
      "Hi , I would love to buy some of the books you have listed please let me know around which date they can be delivered",
    price: "3",
    distance: "16",

    description:
      "Xbox Series X and Series S are upcoming home video game consoles developed by Microsoft. They are both scheduled to be released on November 10, 2020 as the fourth generation. n Xbox Series X, enjoy 4K resolution at 60 FPS in campaign and greatly reduced load times creating seamless gameplay that ushers in the next generation of gaming. Explore the epic expanse of a Halo ring for the first time in the most ambitious Halo game ever made.With Smart Delivery, you can buy a supported game once and always have the best available version for whatever console you play on.From future adventures, to current obsessions, to classic titles, thousands of favourites across four generations of Xbox look and play best on Xbox Series X.",
  },
];

function HomeScreen({ navigation }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let position = new Animated.ValueXY();
  let rotate = position.x.interpolate({
    inputRange: [-Screen_width / 2, 0, Screen_width / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const rotateAndTranslate = {
    transform: [
      {
        rotate: rotate,
      },
      ...position.getTranslateTransform(),
    ],
  };
  const handleRight = () => {
    Animated.spring(position, {
      toValue: {
        x: Screen_width + 100,
        y: Screen_height - (Screen_height - 200),
      },
      restSpeedThreshold: 100,
      restDisplacementThreshold: 40,
      useNativeDriver: true,
    }).start(
      () => {
        setCurrentIndex(currentIndex + 1);
      },
      () => {
        position.setValue({ x: 0, y: 0 });
      }
    );
  };
  const handleLeft = () => {
    Animated.spring(position, {
      toValue: {
        x: -Screen_width - 100,
        y: Screen_height - (Screen_height - 200),
      },
      restSpeedThreshold: 100,
      restDisplacementThreshold: 40,
      useNativeDriver: true,
    }).start(
      () => {
        setCurrentIndex(currentIndex + 1);
      },
      () => {
        position.setValue({ x: 0, y: 0 });
      }
    );
  };
  let pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: Screen_width + 100, y: gestureState.dy },
          restSpeedThreshold: 100,
          restDisplacementThreshold: 40,
          useNativeDriver: true,
        }).start(
          () => {
            setCurrentIndex(currentIndex + 1);
          },
          () => {
            position.setValue({ x: 0, y: 0 });
          }
        );
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -Screen_width - 100, y: gestureState.dy },
          restSpeedThreshold: 100,
          restDisplacementThreshold: 40,
          useNativeDriver: true,
        }).start(
          () => {
            setCurrentIndex(currentIndex + 1);
          },
          () => {
            position.setValue({ x: 0, y: 0 });
          }
        );
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const renderItems = () => {
    return Items.map((item, i) => {
      if (i < currentIndex) {
        return null;
      } else if (i == currentIndex) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            key={item.id}
            style={[
              rotateAndTranslate,
              {
                height: "100%",
                width: Screen_width,
                paddingHorizontal: 10,
                paddingTop: 10,

                position: "absolute",
                overflow: "hidden",
              },
            ]}
          >
            <ItemCard
              image={item.images[0]}
              name={item.name}
              price={item.price}
              distance={item.distance}
              description={item.description}
              sellerName={item.sellerName}
              item={item}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={{
              height: "100%",
              width: Screen_width,
              paddingHorizontal: 10,
              paddingTop: 10,
              position: "absolute",
              overflow: "hidden",
            }}
          >
            <ItemCard
              image={item.images[0]}
              name={item.name}
              price={item.price}
              distance={item.distance}
              description={item.description}
              sellerName={item.sellerName}
              item={item}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };
  const [category, setCategory] = useState();
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, alignItems: "center" }}>
        <AppCategories
          items={Categories}
          placeholder={"Categories"}
          selectedItem={category}
          top={"5%"}
          setSelectedItem={(item) => setCategory(item)}
          width={Dimensions.get("window").width * 0.9}
        />
      </View>
      <View style={{ flex: 0.74, alignItems: "center" }}>
        <View style={{ width: Screen_width, height: "100%" }}>
          {renderItems()}
        </View>
      </View>
      <View
        style={{
          flex: 0.13,
          flexDirection: "row",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.buttons} onPress={() => handleLeft()}>
          <Ionicons name="ios-heart-dislike" size={28} color="#FF5722" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => handleRight()}>
          <Ionicons name="ios-heart" size={28} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    height: Screen_height * 0.08,
    width: Screen_height * 0.08,
    borderRadius: Screen_height * 0.04,
    backgroundColor: "#fff",
    elevation: 3,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: "center",
  },
  container: {
    flex: 1,

    top: Constants.statusBarHeight,
  },
});

export default HomeScreen;
