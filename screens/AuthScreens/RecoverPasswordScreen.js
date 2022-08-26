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
  FormControl,
  Input,
  Button,
} from "native-base";
import { AsyncStorage } from "react-native";


import { useNavigation,useRoute } from "@react-navigation/native";

import BaseBox from "../../components/BaseBox";


export default function RecoverPasswordScreen() {

  const navigation = useNavigation()
  const route = useRoute()

  return (
    <BaseBox>
                            <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Forgot Password?
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Try recover your account !
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="email"/>
                </FormControl>

                <Button mt="2" colorScheme="indigo">
                    Send Verification Code 
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Already have an account?{" "}
                    </Text>
                    <Link 
                    onPress={() => navigation.navigate('Login')}
                    _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                }} >
                    Log In
                    </Link>
                </HStack>
                <HStack justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }}>
                    Don't have an account ?{" "}
                    </Text>
                    <Link 
                    onPress={() => navigation.navigate('Signup')}
                    _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm"
                }} >
                    Sign Up
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
    </BaseBox>

  );
}

