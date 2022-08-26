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
  Avatar,
  AspectRatio,
  Image,
  ZStack,
  Button,
  Flex,
  Pressable,
  FlatList,
  Modal,
  FormControl,
  TextArea,
  Input,
 
} from "native-base";

import {
useDisclose,
} from "native-base";
import { AsyncStorage } from "react-native";



import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";











import BaseBoxScrollView from "../../components/BaseBoxScrollView";








const EditModal = (props) => {
  const [data,setData] = useState({
    name:props.name || '',
    username:props.username || '',
    about:props.about || '',
  })


  const onChangeName = (e) => {
    setData({...data,name:e.currentTarget.value })
  }

  const onChangeUsername = (e) => {
    setData({...data,username:e.currentTarget.value})
  }

  const onChangeAbout = (e) => {
    setData({...data,about:e.currentTarget.value})
  }

  return (
    <Center>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Body>
          <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={data.name}
                onChange={onChangeName}
                maxH="250"
              />
            </FormControl>
          <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                value={data.username}
                onChange={onChangeUsername}
                maxH="250"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>About</FormControl.Label>
              <TextArea
                value={data.about}
                onChange={onChangeAbout}
                maxH="250"
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={props.onClose}
              >
                Cancel
              </Button>
              <Button onPress={props.onClose}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};





export default function ProfileScreen({navigation,route}) {

  const [showEditModal, setShowEditModal] = useState(false);
  const EditModalDisclose = useDisclose()

  const [data, setData] = useState({
    id: "1",
    name: "Kucing imut",
    username: "Kucing_imutzz",
    about:"Hello I'm a photographer and nice to meet you guys hopefully we can chat along here",
    photos_amount: "19",
    posts_amount: "10",
    mutual_friends: "5",
    mutual_groups: "2",
  });

  const NavData = [
    {
      name: "Photos",
      amount: data.photos_amount,
      nav: () => navigation.navigate("user_gallery"),
    },
    {
      name: "Posts",
      amount: data.posts_amount,
      nav: () => navigation.navigate("user_posts"),
    },
    {
      name: "Mutual Friends",
      amount: data.mutual_friends,
      nav: () => navigation.navigate("user_mutualfriends"),
    },
    {
      name: "Mutual Groups",
      amount: data.mutual_groups,
      nav: () => navigation.navigate("user_mutualgroups"),
    },
  ];

  return (
    <>
    <EditModal
        name = {data.name}
        username = {data.username}
        about = {data.about}
        isOpen = {EditModalDisclose.isOpen}
        onClose = {EditModalDisclose.onClose}
    />
    <BaseBoxScrollView>
      <Center>
        <VStack space="8" m="4" overflow="hidden">
          <Box>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  rounded="lg"
                  source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                  }}
                  alt="image"
                />
              </AspectRatio>

              <Center
                position="absolute"
                bottom="0"
                px="1.5"
                py="1.5"
                right="0"
              >
                <IconButton
                  colorScheme="amber"
                  variant="solid"
                  rounded="full"
                  _icon={{
                    as: FontAwesome,
                    name: "camera",
                  }}
                />
              </Center>
            </Box>

            <Box ml="4" mt="-10" w="40%">
              <Avatar
                p="1"
                size="2xl"
                bg="white"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              >
                AJ
              </Avatar>
              <Center position="absolute" bottom="0" right="0">
                <IconButton
                  colorScheme="amber"
                  variant="ghost"
                  rounded="full"
                  _icon={{
                    as: FontAwesome,
                    name: "camera",
                  }}
                />
              </Center>
            </Box>
          </Box>

          <VStack rounded="lg" p="2" space="2">
            <Center position="absolute" top="0" px="1.5" pt="1.5" right="0">
              <Button
              onPress={EditModalDisclose.onOpen}
              rounded="xl"
              size="sm"
                variant="subtle"
                endIcon={
                  <Icon as={Entypo} name="edit" size="sm" />
                }
              >
                Edit
              </Button>
            </Center>

            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontSize="xs">Name</Text>

                <Text fontSize="xl" bold>
                  Kucing imut
                </Text>
              </VStack>
            </HStack>

            <Divider />

            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontSize="xs">Username</Text>
                <Text fontSize="xl" bold>
                  kucing_imutzzzz
                </Text>
              </VStack>
            </HStack>

            <Divider />

            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontSize="xs">About</Text>
                <Text>
                  hello there my name is kucing and I'm a professional
                  photographer, nice to meet you guys
                </Text>
              </VStack>
            </HStack>
          </VStack>

          <VStack>
            {NavData.map((item) => (
              <Pressable 
              onPress={item.nav}
              key={item.name}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <HStack
                      justifyContent="space-between"
                      alignItems="center"
                      p="2"
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered
                          ? "coolGray.200"
                          : "white"
                      }
                    >
                      <HStack alignItems="center" space="2">
                        <Text>{item.name}</Text>
                        <Avatar bg="lightBlue.400" size="sm">
                          {item.amount}
                        </Avatar>
                      </HStack>

                      <Icon
                        as={Ionicons}
                        name="ios-chevron-forward-outline"
                        color="coolGray.800"
                        _dark={{
                          color: "warmGray.50",
                        }}
                      />
                    </HStack>
                  );
                }}
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </Center>
    </BaseBoxScrollView>
    </>

  );
}
