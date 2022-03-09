import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { Input, Icon } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/abc.png")} />

        <Text style={{ fontSize: 20 }}>Sign in to your account</Text>
      </View>
      <View style={styles.logInButton}>
        <Text
          onPress={() =>
            navigation.navigate("SignInFrm", { name: "SignInFrm" })
          }
          style={styles.text}
        >
          LOG IN
        </Text>
      </View>
      <View style={styles.signInButton}>
        <Text
          onPress={() =>
            navigation.navigate("SignDetails", { name: "SignDetails" })
          }
          style={styles.text}
        >
          SIGN IN
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logInButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#24a0ed",

    marginVertical: 10,
  },

  signInButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#24a0ed",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
    fontSize: 25,
    color: "#ffffff",
  },
  logo: {
    width: 170,
    height: 300,
    position: "absolute",
    top: -20,
  },
  logoContainer: {
    position: "absolute",
    top: 10,
    alignItems: "center",
    backgroundColor: "green",
  },
});

export default WelcomeScreen;
