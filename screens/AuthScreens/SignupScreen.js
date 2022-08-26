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

export default function SignupScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  return (
    <BaseBox>
      {isFocused && (
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
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
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>

            <Animatable.View animation="fadeInUpBig" direction="alternate">
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input type="password" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Confirm Password</FormControl.Label>
                  <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                  Sign up
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text
                    fontSize="sm"
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    already have an account?{" "}
                  </Text>
                  <Link
                    onPress={() => navigation.navigate("Login")}
                    _text={{
                      color: "indigo.500",
                      fontWeight: "medium",
                      fontSize: "sm",
                    }}
                  >
                    Log In
                  </Link>
                </HStack>
              </VStack>
            </Animatable.View>
          </Box>
        </Center>
      )}
    </BaseBox>
  );
}
