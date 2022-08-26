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
  FlatList,
  ScrollView,
} from "native-base";
import { AsyncStorage } from "react-native";



import BaseBox from "../../components/BaseBox";
import Post from "../../components/Post";
import Comment from "../../components/Comment";

export default function CommentsScreen({navigation,route},props) {

  const [data,setData] = useState([
    {
      id:'1',
      name:'Ucok',
      text:'hey whatsapp bruh how you guys doing?',
      timeStamp:'12:47 PM',
      avatarUrl:"https://100k-faces.glitch.me/random-image",
    },
    {
      id:'2',
      name:'Alex',
      text:'sometimes too',
      timeStamp:'12:47 PM',
      avatarUrl:"https://100k-faces.glitch.me/random-image",
    },
    {
      id:'3',
      name:'John',
      text:'Hi guys',
      timeStamp:'12:47 PM',
      avatarUrl:"https://100k-faces.glitch.me/random-image",
    },
    {
      id:'4',
      name:'Fritz',
      text:'hello bruh',
      timeStamp:'12:47 PM',
      avatarUrl:"https://100k-faces.glitch.me/random-image",
    },
    {
      id:'5',
      name:'Roy',
      text:'how you doing',
      timeStamp:'12:47 PM',
      avatarUrl:"https://100k-faces.glitch.me/random-image",
    },
  ])

  return (

    <BaseBox>
    <ScrollView>
    <Post/>
    <Divider/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </ScrollView>

    </BaseBox>
  );
}

