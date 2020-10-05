import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Matches(props) {
  return (
    <View style={styles.container}>
      <Text>Here will the the list of items that the user liked.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Matches;
