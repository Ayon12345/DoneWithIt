import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Icon, Input, Button, CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const SignInFrm = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Warning", "Please enter your data");
    } else {
      // await AsyncStorage.setItem("userName", name);
      navigation.navigate("Home");
    }
  };
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [check1, setCheck1] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("../assets/abc.png")} />
      <Text style={styles.title}>Sign in to your account</Text>

      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => setemail(value)}
        />
      </View>
      <View style={styles.input}>
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}
        >
          <MaterialCommunityIcons
            //style={styles.eye}
            name="eye-outline"
            size={28}
            style={{ left: 300, position: "absolute" }}
            //position: "absolute",
          />
        </TouchableOpacity>

        <TextInput
          placeholder="Password"
          secureTextEntry={isSecureEntry}
          onChangeText={(value) => setpassword(value)}
        />
      </View>
      <CheckBox
        title="Remember me"
        checked={check1}
        onPress={() => setCheck1(!check1)}
        containerStyle={{
          backgroundColor: "F6F7FF",
          borderColor: "#FFFFFF",

          right: 100,
          top: -5,
          marginTop: -8,
        }}
        //borderColor="white"
      />
      {/* <TouchableOpacity
        style={styles.lock}
        onPress={() => {
          setIsSecureEntry((prev) => !prev);
        }}
      >
        <MaterialIcons name="lock" />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <Button
          onPress={setData}
          title="Sign in"
          buttonStyle={{
            backgroundColor: "#24a0ed",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            height: 60,
          }}
          containerStyle={{
            width: 378,
            marginTop: 2,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forget}>Forgot the password</Text>
      </TouchableOpacity>

      <Text style={styles.continue}>or continue with</Text>

      <Button
        title="Facebook"
        icon={{
          name: "facebook",
          type: "font-awesome-black",
          size: 20,
          color: "blue",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700", color: "black" }}
        buttonStyle={{
          //backgroundColor: "rgba(90, 154, 230, 1)",
          backgroundColor: "white",
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 10,
        }}
        containerStyle={{
          width: 160,
          marginHorizontal: 50,
          marginVertical: 10,
          left: -90,
        }}
      />

      <Button
        title="Google"
        icon={{
          name: "google",
          type: "font-awesome",
          size: 20,
          color: "#3cba54",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700", color: "black" }}
        buttonStyle={{
          //backgroundColor: "rgba(90, 154, 230, 1)",
          backgroundColor: "white",
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 10,
        }}
        containerStyle={{
          width: 160,
          marginHorizontal: 50,
          marginVertical: 10,
          marginBottom: 19,
          left: 90,
          top: -72,
        }}
      />
      <Text style={styles.account}>Don't have an account?</Text>

      <Button
        title="Sign Up"
        style={styles.signIn}
        titleStyle={{ fontWeight: "700", color: "#24a0ed" }}
        buttonStyle={{
          //backgroundColor: "rgba(90, 154, 230, 1)",
          backgroundColor: "#F6F7FF",
          borderColor: "transparent",
          borderWidth: 5,
          borderRadius: 10,
        }}
        containerStyle={{
          left: 98,
          top: -128,
        }}
      />

      {/* <View style={styles.border}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.fbicon}
            //style={styles.eye}
            name="facebook"
            size={28}
            color="#24a0ed"

            // style={{ left: 300, position: "absolute" }}
            //position: "absolute",
          />
          <Text style={styles.facebook}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.googleIcon}
            //style={styles.eye}
            name="google"
            size={25}
            color="#24a0ed"

            // style={{ left: 300, position: "absolute" }}
            //position: "absolute",
          />
          <Text style={styles.google}>Google</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 16,
    color: "black",
    fontWeight: "bold",
  },
  error: {
    fontSize: 16,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    width: "90%",
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: 16,
    marginTop: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 100,
  },
  button: {
    fontSize: 20,
    color: "white",
    width: 120,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: "#c01c00",
    padding: 8,
    textAlign: "center",
  },

  eye: {
    position: "absolute",
    right: 20,
  },
  forget: {
    textAlign: "center",
    fontSize: 18,
    // marginBottom: 30,
    //marginTop: 16,
    color: "#24a0ed",
    marginBottom: 5,
  },
  continue: {
    textAlign: "center",
    fontSize: 14,
    // marginBottom: 30,
    marginTop: 26,
    color: "black",
    fontWeight: "bold",
  },
  fbicon: {
    marginBottom: 30,
    marginTop: 25,
    marginRight: 280,
    right: 20,
  },

  facebook: {
    //textAlign: "center",
    fontSize: 20,
    // marginBottom: 30,

    left: 15,
    bottom: 60,

    color: "#24a0ed",
    fontWeight: "bold",
  },

  google: {
    //textAlign: "center",
    fontSize: 20,
    // marginBottom: 30,

    left: 232,
    bottom: 173,

    color: "#24a0ed",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
  },

  googleIcon: {
    marginBottom: 30,
    marginTop: 25,
    marginRight: 280,
    left: 200,
    top: -115,
  },

  account: {
    //textAlign: "center",
    fontSize: 16,
    // marginBottom: 30,
    marginTop: 16,
    top: -90,
    left: -35,
    color: "black",
  },

  signIn: {
    //textAlign: "center",
    fontSize: 16,
    // marginBottom: 30,
    //marginTop: 16,
    color: "#24a0ed",
    top: -113,
    right: -85,
  },
});

export default SignInFrm;
