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
  Spinner,
} from "native-base";
import { AsyncStorage } from "react-native";


import BaseBoxScrollView from "../../components/BaseBoxScrollView";



export default function SplashScreen() {


  return (
    <BaseBoxScrollView>
            <Center>
            <HStack space={2} justifyContent="center">
                <Spinner size="lg" accessibilityLabel="Loading" />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        </Center>
    </BaseBoxScrollView>


  );
}

