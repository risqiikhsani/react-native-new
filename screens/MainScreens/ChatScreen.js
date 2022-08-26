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
  Button,
  Spacer,
  Avatar,
  Fab,
} from "native-base";
import { AsyncStorage } from "react-native";



import BaseBoxScrollView from "../../components/BaseBoxScrollView";

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const CustomFab = (props) => {
  return(
    <>
    <Fab 
    renderInPortal={false} 
    shadow={2} 
    size="xs" 
    right={30} bottom={50}
    icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} 
    />
    </>
  )
        
};

function Chat(props){
  return(
    <Box borderBottomWidth="1" 
      _dark={{
        borderColor: "gray.600"
      }} 
      borderColor="coolGray.200" 
      pl="4" pr="5" py="2"
      >
        <HStack space={3} justifyContent="space-between">
          <Avatar size="48px" source="" />
          <VStack>
            <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold> 
              a
            </Text>
            <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>
                awdaw
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="coolGray.800" alignSelf="flex-start">
              11 PM
          </Text>
        </HStack>
      </Box>
  )
}


export default function ChatScreen({navigation}) {


  return (

    <>
    <CustomFab/>
    <BaseBoxScrollView>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
    </BaseBoxScrollView>
    </>


  );
}

