import React from "react";
import { useState, useEffect, useReducer, useMemo } from "react";
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
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/OtherScreens/SplashScreen";
import Auth_nav from "./navigations/Auth_nav";
import Global_nav from "./navigations/Global_nav";

import storageServices from "./lib/storageServices";

import { AuthContext } from "./Context/AuthContext";
import { ThemeContext } from "./Context/ThemeContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

const InitialLoginState = {
  isLoading: false,
  access_token: "awdaw",
  user_id: null,
  user_name: null,
  
};

const LoginReducer = (prevState, action) => {
  switch (action.type) {
    case "GET_USER_CREDENTIALS":
      return {
        ...prevState,
        isLoading: false,
        access_token: action.access_token,
        user_id: action.user_id,
        user_name: action.user_name,
      };
    case "LOGIN":
      return {
        ...prevState,
        isLoading: false,
        access_token: action.access_token,
        user_id: action.user_id,
        user_name: action.user_name,
      };
    case "LOGOUT":
      return {
        ...prevState,
        access_token: null,
        isLoading: false,
        user_id: null,
        user_name: null,
        access_token: null,
      };
    case "SIGNUP":
      return {
        ...prevState,
        isLoading: false,
      };
  }
};

export default function App() {
  const [loginState, setLoginState] = useReducer(
    LoginReducer,
    InitialLoginState
  );
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = isDarkTheme ? "dark" : "light";



  const authContext = useMemo(
    () => ({
      signIn: async (data) => {

        const firstPair = ["@access_token", data.access_token]
        const secondPair = ["@refresh_token", data.refresh_token]
        const thirdPair = ["@user_id", data.user_id]
        const forthPair = ["@user_name", data.user_name]
        
        try {
          await AsyncStorage.multiSet([firstPair,secondPair,thirdPair,forthPair])
        } catch (e) {
          console.log(e);
        }

        setLoginState({
          type: "LOGIN",
          access_token: data.access_token,
          user_id: data.user_id,
          user_name: data.user_name,
        });
      },
      signOut: async () => {
        
        const keys = ["@access_token","@refresh_token","@user_id","@user_name"]
        
        try {
          await AsyncStorage.multiRemove(keys)
        } catch (e) {
          console.log(e);
        }

        setLoginState({
          type: "LOGOUT",
        });
      },
    }),
    []
  );

  const themeContext = useMemo(
    () => ({
      toggleTheme: () => {
        setDarkTheme(!darkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    

    setTimeout(async () => {
      let values;
      try {
        values = await AsyncStorage.multiGet(["@access_token","@refresh_token","@user_id","@user_name"])
      } catch (e) {
        console.log(e);
      }

        // example console.log output:
        // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]

      setLoginState({
        type: "GET_USER_CREDENTIALS",
        access_token: values[0][1],
        user_id: values[2][1],
        user_name: values[3][1],
      });

    }, 1000);
  }, []);

  return (
    <NativeBaseProvider>
      <ThemeContext value={themeContext}>
        <AuthContext value={authContext}>
          <NavigationContainer>
            {loginState.isLoading ? (
              <SplashScreen />
            ) : loginState.access_token ? (
              <Global_nav />
            ) : (
              <Auth_nav />
            )}
          </NavigationContainer>
        </AuthContext>
      </ThemeContext>
    </NativeBaseProvider>
  );
}
