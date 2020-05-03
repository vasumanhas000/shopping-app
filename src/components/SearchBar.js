import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = props => {
  return (
    <View style={styles.backgroundstyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        style={styles.searchbar}
        placeholder={props.text}
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
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: 15,
    width: 320,
    marginLeft: 15,
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
