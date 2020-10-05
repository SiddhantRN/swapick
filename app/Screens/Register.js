import React, { useState, useEffect } from "react";
import Constant from "expo-constants";
import { View, StyleSheet, Image, Dimensions, Keyboard } from "react-native";

import ButtonSlider from "../Components/ButtonSlider";
import colors from "../config/colors";
import Login from "./Login";
import SignUp from "./SignUp";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

function Register(props) {
  const [up, setUp] = useState(false);
  const [login, setLogin] = useState(true);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardUp);
    Keyboard.addListener("keyboardDidHide", keyboardDown);

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardUp);
      Keyboard.removeListener("keyboardDidHide", keyboardDown);
    };
  }, []);

  const keyboardUp = () => {
    setUp(true);
  };
  const keyboardDown = () => {
    setUp(false);
  };

  const handleSlide = (value) => {
    setLogin(value);
  };

  return (
    <View style={styles.container}>
      {!up ? (
        <Image
          source={require("../assets/appIcon.png")}
          style={styles.icon}
          resizeMode={"contain"}
        />
      ) : null}

      <View style={styles.box}>
        <View style={styles.innerBox}>
          <ButtonSlider
            onSlide={handleSlide}
            buttonName1={"Sign In"}
            buttonName2={"Sign Up"}
            top={ScreenHeight * 0.035}
          />
          {login ? <Login /> : <SignUp />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: ScreenWidth * 0.95,
    alignItems: "center",
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: ScreenHeight * 0.025,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    flex: 1,
    top: Constant.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  icon: {
    marginTop: ScreenHeight * 0.025,
    height: ScreenHeight * 0.15,
    width: ScreenWidth * 0.35,
  },

  innerBox: {
    width: "90%",
  },
});

export default Register;
