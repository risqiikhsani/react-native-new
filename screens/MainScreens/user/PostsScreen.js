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
  Avatar,
} from "native-base";
import { AsyncStorage } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import BaseBoxScrollView from "../../../components/BaseBoxScrollView";
export default function PostsScreen({ navigation, route }) {
  

  return (
    <BaseBoxScrollView>
        <Text>Posts screen</Text>
    </BaseBoxScrollView>
  );
}
