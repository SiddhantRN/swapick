import React from "react";
import { View, StyleSheet, Text } from "react-native";

function About({ aboutMe, address }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>About me </Text>
        <Text style={styles.para} numberOfLines={3}>
          {aboutMe}
        </Text>
        <Text style={styles.heading}>Address</Text>
        <Text style={styles.para} numberOfLines={3}>
          {address}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "90%",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "5%",
  },
  para: {
    fontSize: 16,
  },
});

export default About;
