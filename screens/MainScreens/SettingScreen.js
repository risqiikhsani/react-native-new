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
  Button,
} from "native-base";
import { AsyncStorage } from "react-native";

import BaseBoxScrollView from "../../components/BaseBoxScrollView";

export default function SettingScreen() {
  return (
    <BaseBoxScrollView>
      <VStack>
        <Box>
          <Text>User Setting</Text>
        </Box>

        <VStack space="1" m="2">
          <Button>My Account</Button>
          <Button>Privacy & Safety</Button>
          <Button>Friend Request</Button>
        </VStack>

        <Divider />
        <Box>
          <Text>App Setting</Text>
        </Box>

        <VStack space="1" m="2">
          <Button>Appearance</Button>
          <Button>Accessbility</Button>
          <Button>Language</Button>
          <Button>Notifications</Button>
          <Button>Advanced</Button>
        </VStack>
        <Divider />

        <Box>
          <Text>Activity Setting</Text>
        </Box>

        <VStack space="1" m="2">
          <Button>Activity Privacy</Button>
        </VStack>

        <Divider />
        <VStack space="1" m="2">
          <Button bg="danger.500">Log Out</Button>
        </VStack>
        
      </VStack>
    </BaseBoxScrollView>
  );
}
