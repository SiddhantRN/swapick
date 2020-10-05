import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import { LogBox } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function EditProfile({ navigation, route }) {
  const [userName, setUserName] = useState(route.params.name);
  const [email, setUserEmail] = useState(route.params.mail);
  const [aboutMe, setAboutMe] = useState(route.params.aboutMe);
  const [address, setAddress] = useState(route.params.address);
  const [up, setUp] = useState(false);
  const [pik, setPik] = useState(route.params.image);
  const requestpermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("you need to enable permission to access library");
    }
  };

  useEffect(() => {
    requestpermission();
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
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        setPik(result.uri);
        route.params.onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    <View style={styles.container}>
      {!up ? (
        <View style={styles.upper}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile", { uri: pik })}
            >
              <Text style={{ color: "#fff", left: 10, fontSize: 18 }}>
                Back
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                color: "#fff",
                left: 5,
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Edit Profile
            </Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#fff", right: 10, fontSize: 18 }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profilePik}>
            <Image
              source={
                pik
                  ? { uri: pik }
                  : {
                      uri:
                        "https://res.cloudinary.com/dy71m2dro/image/upload/v1601154655/FirstClient/user1_oq1dy5.png",
                    }
              }
              style={styles.profileImage}
              resizeMode={"cover"}
            />
            <TouchableOpacity style={styles.edit} onPress={selectImage}>
              <MaterialIcons name="edit" size={24} color="#4B413A" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      <View style={!up ? styles.field : styles.kField}>
        <Text style={styles.fieldName}>Name</Text>
        <TextInput
          style={styles.fieldValue}
          onChangeText={(text) => {
            route.params.onChangeName(text);
            setUserName(text);
          }}
          value={userName}
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.field1}>
        <Text style={styles.fieldName}>E-mail</Text>
        <TextInput
          style={styles.fieldValue}
          value={email}
          onChangeText={(text) => {
            route.params.onChangeEmail(text);
            setUserEmail(text);
          }}
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.field1}>
        <Text style={styles.fieldName}>About Me</Text>
        <TextInput
          multiline
          style={styles.fieldValue1}
          value={aboutMe}
          onChangeText={(text) => {
            route.params.onChangeAboutMe(text);
            setAboutMe(text);
          }}
          placeholderTextColor="#000"
        />
        <Text style={styles.fieldName}>Address</Text>
        <TextInput
          multiline
          style={styles.fieldValue1}
          value={address}
          onChangeText={(text) => {
            route.params.onChangeAddress(text);
            setAddress(text);
          }}
          placeholderTextColor="#000"
        />
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          position: "absolute",
          bottom: 5,
          height: deviceHeight * 0.06,
          width: deviceWidth * 0.9,
          backgroundColor: "#E53935",
          alignSelf: "center",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: deviceHeight * 0.028,
            color: "#fff",
          }}
        >
          DELETE ACCOUNT
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  edit: {
    height: deviceHeight * 0.05,
    width: deviceHeight * 0.05,
    borderRadius: deviceHeight * 0.025,
    right: 5,
    position: "absolute",
    zIndex: 1,

    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },

  field: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "12%",
  },

  kField: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "5%",
  },

  field1: {
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: "1%",
  },
  fieldName: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  fieldValue: {
    height: deviceHeight * 0.06,
    backgroundColor: "#f6f6f6",
    paddingLeft: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
  fieldValue1: {
    height: deviceHeight * 0.1,
    padding: 5,
    backgroundColor: "#f6f6f6",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    textAlignVertical: "top",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3%",
  },

  profilePik: {
    height: deviceHeight * 0.2,
    width: deviceHeight * 0.2,
    position: "absolute",
    zIndex: 1,
    borderRadius: deviceHeight * 0.2,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    top: deviceHeight * 0.1,
  },
  profileImage: {
    height: deviceHeight * 0.2,
    width: deviceHeight * 0.2,
    borderRadius: deviceHeight * 0.2,
    borderColor: "#4B413A",

    borderWidth: 3,
    alignSelf: "center",
  },
  upper: {
    height: deviceHeight * 0.25,
    width: "100%",
    backgroundColor: colors.primary,
  },
});

export default EditProfile;
