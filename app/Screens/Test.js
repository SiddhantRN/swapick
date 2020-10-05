import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import useLocation from "../hooks/useLocation";
import * as Location from "expo-location";

function Test(props) {
  const location = useLocation();
  console.log();

  const locFunction = async () => {
    const [address] = await Location.reverseGeocodeAsync(location);

    console.log(address.city + " " + address.district);
  };
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <TouchableOpacity
        style={{ height: 150, width: 150, backgroundColor: "blue" }}
        onPress={locFunction}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;
