import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Location from "expo-location";

import useLocation from "../hooks/useLocation";
import ImageList from "../Components/ImagePicker";
import colors from "../config/colors";
import AppCategories from "../Components/AppCategories";

deviceHeight = Dimensions.get("window").height;
deviceWidth = Dimensions.get("window").width;

const Categories = [
  {
    id: 1,
    label: "Books",
    icon: require("../assets/icons/books.png"),
    color: "#69F0AE",
  },

  {
    id: 2,
    label: "Electronics",
    icon: require("../assets/icons/phone.png"),
    color: "#ffff00",
  },
];

function AddItemScreen({ navigation }) {
  const location = useLocation();
  const validationSchema = Yup.object().shape({
    Item: Yup.string().required().min(1).label("Item's Title"),
    price: Yup.number().required().label("Price"),
    Description: Yup.string().max(200).label("Item's Description"),
  });
  const [images, setImages] = useState([]);
  const [up, setUp] = useState(false);
  const [category, setCategory] = useState();
  const [address, setAddress] = useState();
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

  const handleSubmit = (values) => {
    alert("Item has been submitted");
    console.log("Item has been submitted");
  };
  const locFunction = async () => {
    const [place] = await Location.reverseGeocodeAsync(location);
    setAddress(place.district + " , " + place.city + " , " + place.country);
    console.log(place);
  };
  return (
    <Formik
      initialValues={{
        Item: "",

        price: "",
        Description: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          {!up && (
            <>
              <View style={styles.header}>
                <Text style={styles.headerTxt}>Post An Item</Text>
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 12,
                  }}
                  onPress={handleSubmit}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      color: colors.primary,
                    }}
                  >
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          <View
            style={{
              width: "90%",
              alignSelf: "center",
            }}
          >
            {!up && (
              <>
                <Text style={styles.field}>Add Photos</Text>
                <ImageList images={images} setImages={setImages} />
              </>
            )}
            <Text style={styles.field}>Item’s Title</Text>
            <TextInput
              placeholder={"Item"}
              placeholderTextColor={"#c4c4c4"}
              style={styles.input}
              value={values.Item}
              onChangeText={handleChange("Item")}
              onBlur={() => setFieldTouched("Item")}
            />
            {touched.Item && errors.Item && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.Item}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                marginTop: "2%",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.field}>Item’s Price</Text>
                <TextInput
                  placeholderTextColor={"#c4c4c4"}
                  style={styles.input2}
                  value={values.price}
                  onChangeText={handleChange("price")}
                  onBlur={() => setFieldTouched("price")}
                />
                {touched.price && errors.price && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginLeft: deviceHeight * 0.01,
                    }}
                  >
                    {errors.price}
                  </Text>
                )}
              </View>

              <View>
                <Text style={styles.field}>Category</Text>
                <AppCategories
                  items={Categories}
                  placeholder={"Categories"}
                  selectedItem={category}
                  setSelectedItem={(item) => setCategory(item)}
                  width={deviceWidth * 0.4}
                />
              </View>
            </View>
            <Text style={styles.field}>Description</Text>

            <TextInput
              multiline
              placeholder={"Description of Product"}
              placeholderTextColor={"#c4c4c4"}
              style={styles.input3}
              value={values.Description}
              onChangeText={handleChange("Description")}
              onBlur={() => setFieldTouched("Description")}
            />
            {touched.Description && errors.Description && (
              <Text
                style={{
                  fontSize: 12,
                  color: "red",
                  marginLeft: deviceHeight * 0.01,
                }}
              >
                {errors.Description}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                // backgroundColor: "#c4c4c4",
                marginTop: "2%",
              }}
            >
              <Text style={styles.field1}>Address</Text>
              <TouchableOpacity onPress={locFunction}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: colors.primary,
                  }}
                >
                  Use Location
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              multiline
              placeholder={"Address"}
              placeholderTextColor={"#c4c4c4"}
              style={styles.input3}
              value={address}
              onChangeText={(value) => setAddress(value)}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: Constants.statusBarHeight,
  },
  field: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "1%",
  },
  field1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    marginTop: "2%",
    marginBottom: "2%",
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
  },
  headerTxt: {
    fontSize: deviceHeight * 0.035,
    fontWeight: "bold",
  },
  input: {
    height: deviceHeight * 0.06,
    width: "100%",
    paddingLeft: 10,

    backgroundColor: "#f6f6f6",

    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
  input3: {
    height: deviceHeight * 0.1,
    textAlignVertical: "top",
    width: "100%",
    paddingTop: 5,
    paddingLeft: 10,

    backgroundColor: "#f6f6f6",

    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
  input2: {
    height: deviceHeight * 0.06,
    width: deviceWidth * 0.4,
    paddingTop: 5,
    paddingLeft: 10,

    backgroundColor: "#f6f6f6",

    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },

  title: {
    fontSize: deviceHeight * 0.045,

    fontWeight: "bold",
  },
});

export default AddItemScreen;
