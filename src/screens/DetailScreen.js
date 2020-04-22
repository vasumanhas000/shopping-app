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
        <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" style={styles.icon}></AntDesign>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Ionicons name="ios-arrow-back" style={styles.arrow}></Ionicons>
        </TouchableOpacity>
        <SearchBar text="Search your favourite products"></SearchBar>
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
        style={{
          alignItems: "flex-start",
          marginLeft: 75,
          marginTop: 20,
        }}
      >
        <Text style={styles.name}>{details.name}</Text>
        <Text style={styles.details}>{details.details}</Text>
        <View style={{ flexDirection: "row-reverse" }}>
          <View
            style={{
              borderWidth: 1,
              width: 40,
              height: 37,
              borderRadius: 8,
              backgroundColor: "#F8C009",
              alignItems: "center",
              marginLeft: 150,
            }}
          >
            <AntDesign
              name="shoppingcart"
              style={{
                fontSize: 25,
                color: "white",
                marginTop: 4,
                marginRight: 2,
              }}
            ></AntDesign>
          </View>
          <Text style={styles.price}>{details.price}</Text>
        </View>
        <View style={styles.buy}>
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            BUY NOW
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          width: 300,
          height: 140,
          borderRadius: 10,
          marginTop: 15,
          marginLeft: 55,
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginTop: 12,
            marginLeft: 18,
            fontFamily: "Roboto",
            color: "#343D59",
            fontWeight: "500",
          }}
        >
          About this item:
        </Text>
        <Text
          style={{
            marginLeft: 17,
            fontSize: 12,
            fontFamily: "Roboto",
            color: "#343D59",
            marginRight: 17,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          maximus nec nisi non aliquam. Vivamus pretium, elit ac condimentum
          faucibus, purus nibh cursus nisi, quis aliquet ligula orci sed metus.
        </Text>
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
  buy: {
    width: 261,
    height: 36,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#975EFF",
    paddingTop: 6,
    marginTop: 10,
  },
  icon1: {
    fontSize: 28,
    color: "white",
    marginTop: 4,
    marginRight: 2,
  },
});

export default DetailsScreen;
