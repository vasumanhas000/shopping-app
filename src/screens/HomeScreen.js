import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

const SearchScreen = () => {
  const expenses = [
    { name: `Shoes` },
    { name: `Tshirt` },
    { name: "Jeans" },
    { name: "Mobile" },
    { name: "Hat" },
  ];
  return (
    <View>
      <TextInput
        style={styles.searchbar}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
      ></TextInput>
      <FlatList
        keyExtractor={expense => expense.name}
        data={expenses}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "grey",
  },
});

export default SearchScreen;
