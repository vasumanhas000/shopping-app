import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import SearchBar from "../components/SearchBar";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const DetailsScreen = props => {
  const details = props.navigation.getParam("details");
  return (
    <View style={styles.view}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Feather name="menu" style={styles.menu}></Feather>
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
        ></Image>
        <AntDesign name="shoppingcart" style={styles.icon}></AntDesign>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Ionicons name="ios-arrow-back" style={styles.arrow}></Ionicons>
        </TouchableOpacity>
        <SearchBar></SearchBar>
      </View>
      <SliderBox
        style={styles.SliderBox}
        images={[
          details.imageSource,
          details.imageSource1,
          details.imageSource2,
        ]}
        resizeMethod={"resize"}
        resizeMode={"cover"}
        autoplay
        circleLoop
        dotColor="#343D59"
      ></SliderBox>
      <View
        style={{ alignItems: "flex-start", paddingLeft: 80, paddingTop: 20 }}
      >
        <Text style={styles.name}>{details.name}</Text>
        <Text style={styles.details}>{details.details}</Text>
        <Text style={styles.price}>{details.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F6F7FC",
    flex: 1,
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 8,
    marginLeft: 10,
    alignSelf: "stretch",
  },
  icon: {
    alignSelf: "center",
    color: "#FF2D88",
    fontSize: 35,
    marginTop: 5,
    marginLeft: 5,
    paddingLeft: 272,
  },
  top: {
    flexDirection: "row",
  },
  menu: {
    alignSelf: "center",
    color: "#343D59",
    fontSize: 35,
    marginTop: 5,
  },
  arrow: {
    color: "#343D59",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 17,
    paddingLeft: 10,
  },
  SliderBox: {
    height: 250,
    width: 250,
    marginLeft: 70,
    borderRadius: 27,
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#353E5A",
  },
  details: {
    fontSize: 19,
    fontFamily: "Roboto",
    color: "#353E5A",
  },
  price: {
    fontSize: 25,
    fontFamily: "Roboto",
    color: "#353E5A",
    fontWeight: "700",
  },
});

export default DetailsScreen;
