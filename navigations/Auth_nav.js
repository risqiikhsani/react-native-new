import React from "react";
import { useState,useEffect,useReducer,useMemo } from "react";
import {
  Text,
  Divider,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Icon,
  IconButton,
} from "native-base";
import { AsyncStorage } from "react-native";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";


import LoginScreen from "../screens/AuthScreens/LoginScreen";
import SignupScreen from "../screens/AuthScreens/SignupScreen";
import RecoverPasswordScreen from "../screens/AuthScreens/RecoverPasswordScreen";

const Stack = createStackNavigator();


export default function Auth_nav() {


  return (
    <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{
        headerShown:false,
    }}
    >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
    </Stack.Navigator>
  );
}

