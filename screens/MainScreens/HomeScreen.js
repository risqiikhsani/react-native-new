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
  FlatList,
  Modal,
  Fab,
  FormControl,
  TextArea,
  Button,
  Actionsheet,
} from "native-base";
import { AsyncStorage } from "react-native";

import BaseBoxScrollView from "../../components/BaseBoxScrollView";

import Post from "../../components/Post";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { useDisclose } from "native-base";

import PostActionSheet from "../../components/ActionSheets/PostActionSheet";
import PostShareActionSheet from "../../components/ActionSheets/PostShareActionSheet";

const CustomFab = (props) => {
  return (
    <>
      <Fab
        onPress={props.onOpen}
        renderInPortal={false}
        shadow={2}
        size="xs"
        right={30}
        bottom={50}
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
      />
    </>
  );
};

const CreatePostModal = (props) => {
  const [textAreaValue, setTextAreaValue] = useState("Value Controlled");

  const demoValueControlledTextArea = (e) => {
    setTextAreaValue(e.currentTarget.value);
  };

  return (
    <Center>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Create Post</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>What's on your mind?</FormControl.Label>
              <TextArea
                value={textAreaValue}
                onChange={demoValueControlledTextArea}
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
              <Button onPress={props.onClose}>Post</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default function HomeScreen({navigation,route}) {


  const CreatePostModalDisclose = useDisclose()
  const PostActionSheetDisclose = useDisclose()
  const PostShareActionSheetDisclose = useDisclose()

  const [data, setData] = useState([
    {
      id: "1",
      name: "Ucok",
      text: "hey whatsapp bruh how you guys doing?",
      timeStamp: "12:47 PM",
      avatarUrl: "https://100k-faces.glitch.me/random-image",
    },
    {
      id: "2",
      name: "Alex",
      text: "sometimes too",
      timeStamp: "12:47 PM",
      avatarUrl: "https://100k-faces.glitch.me/random-image",
    },
    {
      id: "3",
      name: "John",
      text: "Hi guys",
      timeStamp: "12:47 PM",
      avatarUrl: "https://100k-faces.glitch.me/random-image",
    },
    {
      id: "4",
      name: "Fritz",
      text: "hello bruh",
      timeStamp: "12:47 PM",
      avatarUrl: "https://100k-faces.glitch.me/random-image",
    },
    {
      id: "5",
      name: "Roy",
      text: "how you doing",
      timeStamp: "12:47 PM",
      avatarUrl: "https://100k-faces.glitch.me/random-image",
    },
  ]);

  return (
    <>
      <CustomFab onOpen={CreatePostModalDisclose.onOpen} />

      <CreatePostModal
        isOpen={CreatePostModalDisclose.isOpen}
        onClose={CreatePostModalDisclose.onClose}
      />

      <PostActionSheet
        isOpen={PostActionSheetDisclose.isOpen}
        onClose={PostActionSheetDisclose.onClose}
      />
      <PostShareActionSheet
        isOpen={PostShareActionSheetDisclose.isOpen}
        onClose={PostShareActionSheetDisclose.onClose}
      />

      <BaseBoxScrollView>
        <Post
          boxstyle
          showbutton
          post_nav={() => navigation.navigate("Post",)}
          user_nav={() => navigation.navigate("User", { userId: "2" })}
          dotsbuttonfunction={PostActionSheetDisclose.onOpen}
          sharebuttonfunction={PostShareActionSheetDisclose.onOpen}
        />
      </BaseBoxScrollView>
    </>
  );
}
