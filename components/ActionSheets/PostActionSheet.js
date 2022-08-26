import React, { Children } from "react";
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
  ScrollView,
  Avatar,
  Pressable,
  Modal,
  Actionsheet,
} from "native-base";

import { AsyncStorage } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function PostActionSheet(props) {
  return (
    <Center>
      <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Report</Actionsheet.Item>
          <Actionsheet.Item>Don't show post from this user</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
