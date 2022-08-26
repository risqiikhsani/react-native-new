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

export default function Post(props) {



  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <Pressable onPress={props.post_nav}>
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              style={
                props.boxstyle && {
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }
              }
              w="90%"
              rounded={props.boxstyle && "xl"}
              shadow={props.boxstyle && "1"}
              pt="2"
              px={props.boxstyle && "2"}
              my="2"
              mx="auto"
              _dark={
                props.boxstyle && {
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }
              }
              _light={
                props.boxstyle && {
                  backgroundColor: isPressed
                    ? "coolGray.100"
                    : isHovered
                    ? "coolGray.100"
                    : "white",
                }
              }
            >
              <VStack>
                <HStack justifyContent="space-between">
                  <Pressable onPress={props.user_nav}>
                    <HStack space="1">
                      <Avatar
                        size="48px"
                        source={{
                          uri: "https://100k-faces.glitch.me/random-image",
                        }}
                      />
                      <VStack>
                        <Text fontSize="md" bold>
                          Ucok
                        </Text>
                        <Text fontSize="xs" fontWeight="light">
                          11:12 AM
                        </Text>
                      </VStack>
                    </HStack>
                  </Pressable>

                  {props.showbutton && (
                    <IconButton
                      onPress={props.dotsbuttonfunction}
                      size="xs"
                      colorScheme="indigo"
                      variant="ghost"
                      _icon={{
                        as: Entypo,
                        name: "dots-three-vertical",
                      }}
                    />
                  )}
                </HStack>

                <VStack py="3" px="4">
                  <Text>testing</Text>
                </VStack>

                {props.showbutton && (
                  <VStack>
                    <HStack justifyContent="space-between" px="4">
                      <Text fontSize="xs" fontWeight="light" color="gray.700">
                        1212 likes
                      </Text>
                      <Text fontSize="xs" fontWeight="light" color="gray.700">
                        4 comments
                      </Text>
                      <Text fontSize="xs" fontWeight="light" color="gray.700">
                        10 shares
                      </Text>
                    </HStack>

                    <Divider thickness="1" />

                    <HStack justifyContent="space-between" py="1">
                      <HStack>
                        <IconButton
                          colorScheme="indigo"
                          variant="ghost"
                          _icon={{
                            as: AntDesign,
                            name: "like2",
                          }}
                        />
                        <IconButton
                          onPress={() => {
                            navigation.navigate("Comment", {});
                          }}
                          colorScheme="indigo"
                          variant="ghost"
                          _icon={{
                            as: EvilIcons,
                            name: "comment",
                          }}
                        />
                        <IconButton
                          onPress={props.sharebuttonfunction}
                          colorScheme="indigo"
                          variant="ghost"
                          _icon={{
                            as: FontAwesome,
                            name: "share",
                          }}
                        />
                      </HStack>
                      <IconButton
                        colorScheme="indigo"
                        variant="ghost"
                        _icon={{
                          as: Ionicons,
                          name: "bookmark-outline",
                        }}
                      />
                    </HStack>
                  </VStack>
                )}
              </VStack>
            </Box>
          );
        }}
      </Pressable>
    </>
  );
}
