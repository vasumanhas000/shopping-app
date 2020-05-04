import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SettingsScreen = props => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View style={{ marginRight: 350 }}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Feather name="menu" style={styles.menu}></Feather>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 300,
          marginLeft: 120,
        }}
      >
        Settings
      </Text>
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
});
export default SettingsScreen;
