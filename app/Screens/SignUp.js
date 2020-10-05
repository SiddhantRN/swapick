import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

function SignUp(props) {
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate("AppNavigator");
    //logic for Sign Up here using state variables email,usernameand password.
  };
  const handlePress = () => {
    //different functions for different actions can be created and linked to respective buttons
  };
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={"email-address"}
        placeholder={"Email"}
        placeholderTextColor={"#9e9e9e"}
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        placeholder={"UserName"}
        placeholderTextColor={"#9e9e9e"}
        style={styles.input}
        onChangeText={(value) => setUserName(value)}
      />
      <TextInput
        secureTextEntry
        placeholder={"Password"}
        placeholderTextColor={"#9e9e9e"}
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.thirdParty}>
        <Text style={{ fontWeight: "bold", color: "#9e9e9e" }}>
          Sign up with :
        </Text>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={require("../assets/icons/facebook.png")}
            resizeMode={"contain"}
            style={styles.icons}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", color: "#9e9e9e" }}> Or </Text>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={require("../assets/icons/google.png")}
            resizeMode={"contain"}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: ScreenHeight * 0.06,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: ScreenHeight * 0.02,
  },

  icons: {
    height: ScreenHeight * 0.05,
    marginHorizontal: 5,
    width: ScreenHeight * 0.05,
  },
  input: {
    width: "100%",
    height: ScreenHeight * 0.06,
    backgroundColor: "#f6f6f6",
    marginTop: ScreenHeight * 0.02,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    paddingLeft: 10,
  },
  password: {
    color: "#9e9e9e",
    alignSelf: "flex-end",
    marginTop: ScreenHeight * 0.01,
    fontWeight: "bold",
  },
  thirdParty: {
    marginTop: ScreenHeight * 0.02,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp;
