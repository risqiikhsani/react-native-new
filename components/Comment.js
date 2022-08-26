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
  Avatar,
  Pressable,
} from "native-base";


import { AsyncStorage } from "react-native";

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation,useRoute } from "@react-navigation/native";


export default function Comment(props) {

    const navigation = useNavigation();
    const route = useRoute();

  return (

    <Pressable>
        {({isHovered,isFocused,isPressed}) => {
            return (
                <HStack space="1" p="2">
                    <Avatar
                        size="sm"
                        source={{uri:"https://100k-faces.glitch.me/random-image"}}
                    >
                        12
                    </Avatar>
                    <VStack space="1" >
                        
                        <Box bg="white" rounded="md" p="1">
                        <Text> <Text bold>name</Text> its my commentits my comment its my comment its my comment its my comment its my comment its my comment</Text>
                        </Box>
                        
                            
                        <HStack alignItems="center" space="1">
                            <Button disabled size="sm" variant="ghost" py="-1">
                                3h
                            </Button>
                            <Button size="sm" variant="ghost" py="-1">
                                10 Like
                            </Button>
                            <Button size="sm" variant="ghost" py="-1">
                                Reply
                            </Button>
                        </HStack>

                        <Button 
                        onPress={() => navigation.navigate('Replies')}
                        size="sm" variant="ghost" maxW="40"  py="-1">
                                view replies
                        </Button>
                    </VStack>

                </HStack>
            )
        }}
    </Pressable>

    
  );
}

