import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { withNavigation } from "react-navigation";
const ResultsList = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal={true}
        data={props.list}
        keyExtractor={item => {
          return (
            item.id.toString() +
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime())
            ).toString()
          );
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Search");
              }}
            >
              <View style={styles.container}>
                <Image
                  source={item.imageSource}
                  style={{
                    height: 100,
                    width: 120,
                    borderRadius: 12,
                    borderWidth: 5,
                  }}
                ></Image>
                <Text style={styles.text}>Lorem Ipsum</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
    marginLeft: 15,
  },
  container: {
    marginRight: 15,
    marginLeft: 5,
    marginTop: 17,
    marginBottom: 10,
  },
  text: {
    marginLeft: 2,
    fontSize: 11,
    marginTop: 5,
    fontFamily: "Roboto",
    fontWeight: "600",
  },
});

export default withNavigation(ResultsList);
