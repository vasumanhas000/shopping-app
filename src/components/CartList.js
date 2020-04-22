import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import Data from "../components/Data";
import { Feather } from "@expo/vector-icons";

const CartList = () => {
  let counter = 0;
  return (
    <View>
      <FlatList
        data={Data}
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
            <View
              style={{
                backgroundColor: "#F7F8FC",
                flexDirection: "row",
                marginBottom: 10,
                marginLeft: 30,
                borderWidth: 1,
                borderRadius: 10,
                padding: 3,
                marginRight: 20,
                borderColor: "#FFFFFF",
              }}
            >
              <Image source={item.imageSource} style={styles.image}></Image>
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
          );
        }}
      ></FlatList>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 20,
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
const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 14,
  },
});

export default CartList;
