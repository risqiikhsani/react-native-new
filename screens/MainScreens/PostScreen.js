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
  ScrollView,
} from "native-base";
import { AsyncStorage } from "react-native";

import BaseBoxScrollView from "../../components/BaseBoxScrollView";
import Post from "../../components/Post";

import PostShareActionSheet from "../../components/ActionSheets/PostShareActionSheet";
import PostActionSheet from "../../components/ActionSheets/PostActionSheet";

export default function PostScreen({ navigation, route }, props) {
  const [showPostActionSheet, setShowPostActionSheet] = useState(false);
  const [showPostShareActionSheet, setShowPostShareActionSheet] =
    useState(false);

  return (
    <>
      <PostActionSheet
        isOpen={showPostActionSheet}
        onClose={() => setShowPostActionSheet(false)}
      />
      <PostShareActionSheet
        isOpen={showPostShareActionSheet}
        onClose={() => setShowPostShareActionSheet(false)}
      />
      <BaseBoxScrollView>
        <Post

          showbutton
          user_nav={() => navigation.navigate("User", { userId: "2" })}
          dotsbuttonfunction={() => setShowPostActionSheet(true)}
          sharebuttonfunction={() => setShowPostShareActionSheet(true)}
        />
      </BaseBoxScrollView>
    </>
  );
}
