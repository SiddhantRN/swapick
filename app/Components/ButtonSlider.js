import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";
import colors from "../config/colors";

function ButtonSlider({ buttonName1, buttonName2, top, onSlide }) {
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [active, setActive] = useState(true);
  const [xTabOne, setXTabOne] = useState(0);
  const [xTabTwo, setXTabTwo] = useState(0);

  const handleSlide = (type) => {
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={[styles.buttonContainer, { marginTop: top }]}>
      <>
        <Animated.View
          style={[
            styles.overlay,
            {
              transform: [
                {
                  translateX,
                },
              ],
            },
          ]}
        />
        <TouchableOpacity
          onLayout={(event) => setXTabOne(event.nativeEvent.layout.x)}
          onPress={() => {
            setActive(true);
            handleSlide(xTabOne);
            onSlide(true);
          }}
          style={styles.button1}
        >
          <Text
            style={
              active
                ? { color: "#fff", fontWeight: "bold", fontSize: 16 }
                : { color: "#9e9e9e", fontWeight: "bold", fontSize: 16 }
            }
          >
            {buttonName1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActive(false);
            handleSlide(xTabTwo);
            onSlide(false);
          }}
          onLayout={(event) => setXTabTwo(event.nativeEvent.layout.x)}
          style={styles.button2}
        >
          <Text
            style={
              active
                ? { color: "#9e9e9e", fontWeight: "bold", fontSize: 16 }
                : { color: "#fff", fontWeight: "bold", fontSize: 16 }
            }
          >
            {buttonName2}
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height * 0.06,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderColor: "#E8E8E8",
    alignSelf: "center",
    borderWidth: 1,
  },
  button1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: colors.secondary,
    position: "absolute",

    left: 0,
  },
});

export default ButtonSlider;
