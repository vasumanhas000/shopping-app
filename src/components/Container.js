import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Container = props => {
  return (
    <View style={styles.view}>
      <Text>{props.name}</Text>
      <Image source={props.image} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 5,
    borderColor: "black",
    height: 70,
  },
  image: {
    height: 35,
    width: 35,
  },
});

export default Container;
