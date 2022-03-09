import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HelloTry = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../assets/ayon.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
});

export default HelloTry;
