import React, { useState } from "react";
import Constants from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import colors from "../config/colors";
import About from "./About";
import Favorites from "./Favorites";
import Matches from "./Matches";
import MyItems from "./MyItems";

const initialLayout = { width: Dimensions.get("window").width };

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("Alex Pinkman");
  const [email, setEmail] = useState("alexpinkman@gmail.com");
  const [aboutMe, setAboutMe] = useState(
    "I am a Freelancer,I love new gadgets and reading books."
  );
  const [address, setAddress] = useState(
    "Schoenebergerstrasse 7 , Hartmannsdorf Brandenburg"
  );
  const [pik, setPik] = useState(null);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "About" },
    { key: "second", title: "Items" },
    { key: "third", title: "Matches" },
    { key: "fourth", title: "Favorites" },
  ]);

  const renderScene = SceneMap({
    first: () => <About aboutMe={aboutMe} address={address} />,
    second: Favorites,
    third: Matches,
    fourth: MyItems,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: colors.primary }}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            alignSelf: "center",
            fontSize: deviceHeight * 0.04,
            fontWeight: "bold",
            marginTop: "1%",
          }}
        >
          My Profile
        </Text>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#fff", left: 5, fontSize: 18 }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProfile", {
                name: userName,
                mail: email,
                aboutMe: aboutMe,
                address: address,
                image: pik,
                onChangeName: setUserName,
                onChangeEmail: setEmail,
                onChangeAboutMe: setAboutMe,
                onChangeAddress: setAddress,
                onChangeImage: setPik,
              })
            }
          >
            <Text
              style={{
                color: "#fff",
                right: 5,

                fontSize: 18,
              }}
            >
              Edit
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
        </View>
      </View>

      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.eMail}>{email}</Text>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={{ marginTop: "5%", backgroundColor: colors.primary }}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box2: {
    width: "90%",
    marginTop: deviceHeight * 0.04,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    top: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  eMail: {
    fontSize: deviceHeight * 0.025,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#7A8A94",
  },
  header: {
    flexDirection: "row",
    width: "100%",

    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "3%",
  },
  name: {
    marginTop: "10%",
    fontSize: deviceHeight * 0.03,
    fontWeight: "bold",
    alignSelf: "center",
  },
  number: {
    color: "#7A8A94",
    fontSize: 18,
  },
  phoneNumber: {
    fontWeight: "bold",
    fontSize: 20,
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
  scene: {
    flex: 1,
  },
  upper: {
    height: deviceHeight * 0.25,
    width: "100%",
    backgroundColor: colors.primary,
  },
});

export default ProfileScreen;
