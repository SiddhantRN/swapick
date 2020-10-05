import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

function ImageList({ images, setImages }) {
  const requestpermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("you need to enable permission to access library");
    } else {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 1,
        });
        if (!result.cancelled) {
          setImages([...images, { id: images.length + 1, uri: result.uri }]);
        }
      } catch (error) {
        console.log("error reading an image", error);
      }
    }
  };

  const handleDelete = (uri) => {
    const newImages = images.filter((item) => item.uri !== uri);
    setImages(newImages);
  };
  return (
    <View style={styles.container}>
      {images.map((item) => (
        <View key={item.uri}>
          <TouchableOpacity
            style={styles.cross}
            onPress={() => handleDelete(item.uri)}
          >
            <Entypo name="cross" size={20} color="#424242" />
          </TouchableOpacity>

          <Image
            style={styles.image}
            resizeMode={"cover"}
            source={{ uri: item.uri }}
          />
        </View>
      ))}

      {images.length < 3 && (
        <TouchableOpacity onPress={requestpermission}>
          <View style={styles.imageBox}>
            <MaterialCommunityIcons name="camera" size={30} color="#757575" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cross: {
    height: 25,
    width: 25,
    zIndex: 4,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    backgroundColor: "#9e9e9e",
  },
  image: {
    height: deviceHeight * 0.15,
    width: deviceWidth * 0.28,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
  },
  imageBox: {
    height: deviceHeight * 0.15,
    width: deviceWidth * 0.28,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 5,
    backgroundColor: "#e0e0e0",
  },
});

export default ImageList;
