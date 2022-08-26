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


import BaseBox from "../../components/BaseBox";
import Comment from "../../components/Comment";
import Reply from "../../components/Reply";

export default function RepliesScreen(props) {


  return (
    <BaseBox>
      <ScrollView>
        <Comment/>
        <Reply/>
        <Reply/>
        <Reply/>
        <Reply/>
      </ScrollView>
    </BaseBox>
  );
}

