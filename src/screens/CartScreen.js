import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import { Context } from "../context/CartContext";

const CartScreen = props => {
  const { state, deleteItem } = useContext(Context);
  return (
    <View style={{ backgroundColor: "#F6F7FC", flex: 1, marginTop: 30 }}>
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
      <FlatList
        data={state}
        keyExtractor={item => {
          return (
            item.id.toString() +
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime())
            ).toString()
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#F7F8FC",
                  flexDirection: "row",
                  marginBottom: 10,
                  marginLeft: 30,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 3,
                  width: 270,
                  height: 78,
                  borderColor: "#FFFFFF",
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("Details", { details: item })
                  }
                >
                  <Image
                    source={item.imageSource}
                    style={styles.image1}
                  ></Image>
                </TouchableOpacity>
                <View style={{ marginLeft: 5 }}>
                  <Text
                    style={{
                      color: "#353E5A",
                      fontSize: 13,
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      marginTop: 5,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: "#353E5A",
                      fontSize: 10,
                      fontFamily: "Roboto",
                      fontWeight: "300",
                      marginTop: 2,
                    }}
                  >
                    {item.details}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#353E5A",
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      marginTop: 5,
                    }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  width: 50,
                  height: 78,
                  borderRadius: 10,
                  alignItems: "center",
                  borderColor: "#F6F7FC",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    deleteItem(item);
                  }}
                  style={{ marginTop: 25 }}
                >
                  <Feather
                    name="minus"
                    style={{ fontSize: 20, color: "#F8C009" }}
                  ></Feather>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginBottom: 100,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 192,
            height: 44,
            backgroundColor: "#FF2D88",
            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Roboto",
              color: "#FFFFFF",
              fontWeight: "700",
              marginTop: 9,
            }}
          >
            Payable Amount :$
          </Text>
        </View>
        <View
          style={{
            marginLeft: 15,
            width: 98,
            height: 44,
            borderRadius: 25,
            alignItems: "center",
            backgroundColor: "#975EFF",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Roboto",
              color: "#FFFFFF",
              fontWeight: "700",
              marginTop: 4,
              marginLeft: 16,
            }}
          >
            Proceed to Payment
          </Text>
        </View>
      </View>
    </View>
  );
};

CartScreen.navigationOptions = () => {
  return {
    header: null,
  };
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
  image1: {
    height: 70,
    width: 70,
    borderRadius: 14,
  },
});

export default CartScreen;
