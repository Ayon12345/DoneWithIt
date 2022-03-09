import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-web";
import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/Welcome";
import HelloTry from "./screens/try";
import SignInFrm from "./screens/SignInFrm";
import SignDetails from "./screens/SignDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInFrm">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HelloTry" component={HelloTry} />
        <Stack.Screen
          name="SignInFrm"
          component={SignInFrm}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignDetails" component={SignDetails} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
