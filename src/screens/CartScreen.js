import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import Data from "../components/Data";
import Cartlist from "../components/CartList";

const CartScreen = props => {
  return (
    <View style={{ backgroundColor: "#F6F7FC", flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Feather name="menu" style={styles.menu}></Feather>
        </TouchableOpacity>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.searchResults}>Your Cart</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <MaterialIcons name="add" style={styles.icon}></MaterialIcons>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Ionicons name="ios-arrow-back" style={styles.arrow}></Ionicons>
        </TouchableOpacity>
        <SearchBar text="Search your cart"></SearchBar>
      </View>
      <Cartlist></Cartlist>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    alignSelf: "center",
    color: "#343D59",
    fontSize: 35,
    marginTop: 5,
  },
  icon: {
    alignSelf: "center",
    color: "#F8C009",
    fontSize: 40,
    marginTop: 3,
    marginLeft: 5,
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 8,
    marginLeft: 10,
    alignSelf: "stretch",
  },
  searchResults: {
    fontSize: 25,
    color: "#FF2D88",
    marginHorizontal: 84,
    alignSelf: "center",
    fontWeight: "bold",
  },
  arrow: {
    color: "#343D59",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 17,
    paddingLeft: 10,
  },
});

export default CartScreen;
