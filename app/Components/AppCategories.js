import React, { useState } from "react";
import Constant from "expo-constants";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import CategoryItem from "./CategoryItem";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

function AppCategories({
  items,
  placeholder,
  selectedItem,
  setSelectedItem,
  top,
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width, marginTop: top }]}>
          <Text style={{ flex: 1, fontWeight: "bold", color: "#9e9e9e" }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <Entypo name="chevron-down" size={24} color="#9e9e9e" />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Close</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoryItem
                name={item.label}
                icon={item.icon}
                color={item.color}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: ScreenHeight * 0.06,
    borderRadius: 5,
    backgroundColor: "#f6f6f6",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  closeButton: {
    height: ScreenHeight * 0.7,
    width: ScreenWidth * 0.7,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    top: Constant.statusBarHeight,
  },
});

export default AppCategories;
