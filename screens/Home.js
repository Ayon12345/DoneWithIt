import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-web";
import SQLite from "react-native-sqlite-storage";

const Home = () => {
  const [name, setname] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // AsyncStorage.getItem("userName").then((value) => {
      //   if (value != null) {
      //     setname(value);
      //   }
      // });
      db.transaction((tx) => {
        tx,
          executeSql(
            "SELECT Name,Phone,Emaill,Address FROM Users",
            [],
            (tx, results) => {}
          );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Welcome {name} </Text>
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

export default Home;
