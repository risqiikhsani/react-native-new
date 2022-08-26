import React, { Children } from "react";
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
  Button,
  ScrollView,
} from "native-base";


import { AsyncStorage } from "react-native";






export default function BaseBoxScrollView(props) {


  return (
    <Box 
    _dark={{ bg: "muted.600" }}
    _light={{ bg: "white" }}
    
    h="100%"

    >
        <ScrollView>
        {props.children}
        </ScrollView>
    </Box>
  );
}

