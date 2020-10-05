import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

function CategoryItem({ icon, name, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon, { backgroundColor: color }]}>
          <Image
            source={icon}
            resizeMode={"contain"}
            style={{ height: 40, width: 40 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 25,
    alignItems: "center",
    width: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 5,
    height: 60,
    width: 60,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default CategoryItem;
