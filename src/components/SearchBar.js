import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundstyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        style={styles.searchbar}
        placeholder="Search your favorite products"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundstyle: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    margin: 15,
    backgroundColor: "white",
    borderRadius: 25,
    flex: 1,
  },
  searchbar: {
    backgroundColor: "white",
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center",
  },
});

export default SearchBar;
