import React from "react";
import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import { FlatGrid } from "react-native-super-grid";
import Data from "../components/Data";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchScreen = props => {
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
        <Text style={styles.searchResults}>Search</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" style={styles.icon}></AntDesign>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <SearchBar text="Search your favourite products"></SearchBar>
        <TouchableOpacity>
          <View style={styles.filter}>
            <Text style={styles.filtertext}>Filters</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatGrid
        items={Data}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("Details", { details: item })
                }
              >
                <Image
                  source={item.imageSource}
                  style={styles.listimage}
                  resizeMode="cover"
                ></Image>
              </TouchableOpacity>
              <Text style={styles.name}> {item.name}</Text>
              <Text style={styles.details}>{item.details}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          );
        }}
      ></FlatGrid>
    </View>
  );
};

SearchScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F6F7FC",
    flex: 1,
    marginTop: 30,
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 8,
    marginLeft: 10,
    alignSelf: "stretch",
  },
  listimage: {
    height: 120,
    width: 120,
    marginBottom: 15,
    marginLeft: 20,
    alignSelf: "stretch",
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#353E5A",
  },
  container: {
    borderWidth: 5,
    backgroundColor: "#F7F8FC",
    borderColor: "#F7F8FC",
    borderRadius: 10,
    marginBottom: 10,
  },
  details: {
    color: "#353E5A",
    marginLeft: 19,
    fontSize: 12,
  },
  top: {
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    color: "#FF2D88",
    fontSize: 35,
    marginTop: 5,
    marginLeft: 5,
  },
  price: {
    fontWeight: "bold",
    color: "#353E5A",
    marginLeft: 100,
    fontSize: 16,
  },
  button: {
    height: 50,
    width: 50,
    margin: 100,
  },
  filter: {
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 15,
    height: 43,
    width: 80,
    borderColor: "#975EFF",
    marginRight: 10,
  },
  filtertext: {
    alignSelf: "center",
    marginTop: 8,
    color: "#975EFF",
    fontWeight: "bold",
  },
  menu: {
    alignSelf: "center",
    color: "#343D59",
    fontSize: 35,
    marginTop: 5,
  },
  searchResults: {
    fontSize: 25,
    color: "#FF2D88",
    marginHorizontal: 95,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default SearchScreen;
