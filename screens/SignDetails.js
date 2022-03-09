import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Alert,
} from "react-native";

import { useEffect, useState } from "react";
import SQLite from "react-native-sqlite-storage";

//

function SignDetails() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    // createTable();
  }, []);

  // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS" +
  //         "Users" +
  //         "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Phone INTEGER, Email TEXT, Address TEXT);"
  //     );
  //   });
  // };

  const setData = async () => {
    if (
      name.length == 0 ||
      phone.length == 0 ||
      email.length == 0 ||
      address.length == 0
    ) {
      Alert.alert("Warning! Enter your data");
    } else {
      try {
        await db.transaction(async (tx) => {
          // tx.executeSql("INSERT INTO USers (Name,Phone,Email,Address)");

          await tx.executeSql(
            "INSERT INTO Users (Name,Phone,Email,Address) VALUES (?,?,?,?)",
            [name, age]
          );
        });
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require("../assets/abc.png")} />
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(value) => setname(value)}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        onChangeText={(value) => setphone(value)}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(value) => setemail(value)}
      />

      <TextInput
        placeholder="Address"
        style={styles.input}
        onChangeText={(value) => setaddress(value)}
      />

      <TouchableOpacity onPress={setData}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: "white",
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
    width: "80%",
    borderRadius: 10,
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
});

export default SignDetails;
