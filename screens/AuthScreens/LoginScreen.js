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
  FormControl,
  Input,
  Button,
} from "native-base";
import { AsyncStorage } from "react-native";

import * as Animatable from "react-native-animatable";

import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

import BaseBox from "../../components/BaseBox";

export default function LoginScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  return (
    <BaseBox>
      {
        // https://github.com/oblador/react-native-animatable/issues/195
        isFocused && (
          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Animatable.View animation="fadeInDown" direction="alternate">
                <Heading
                  size="lg"
                  fontWeight="600"
                  color="coolGray.800"
                  _dark={{
                    color: "warmGray.50",
                  }}
                >
                  Welcome
                </Heading>
              </Animatable.View>

              <Heading
                mt="1"
                _dark={{
                  color: "warmGray.200",
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Sign in to continue!
              </Heading>

              <Animatable.View animation="fadeInUpBig" direction="alternate">
                <VStack space={3} mt="5">
                  <FormControl>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                    <Link
                      onPress={() => navigation.navigate("RecoverPassword")}
                      _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500",
                      }}
                      alignSelf="flex-end"
                      mt="1"
                    >
                      Forget Password?
                    </Link>
                  </FormControl>
                  <Button mt="2" colorScheme="indigo">
                    Sign in
                  </Button>
                  <HStack mt="6" justifyContent="center">
                    <Text
                      fontSize="sm"
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      I'm a new user.{" "}
                    </Text>
                    <Link
                      onPress={() => navigation.navigate("Signup")}
                      _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm",
                      }}
                    >
                      Sign Up
                    </Link>
                  </HStack>
                </VStack>
              </Animatable.View>
            </Box>
          </Center>
        )
      }
    </BaseBox>
  );
}
