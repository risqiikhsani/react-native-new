import React from "react";
import { useState,useEffect,useReducer,useMemo,useLayoutEffect } from "react";
import {
  Text,
  Divider,
  Link,
  HTab,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VTab,
  Box,
  Icon,
  IconButton,
} from "native-base";
import { AsyncStorage } from "react-native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';




import ChatScreen from "../screens/MainScreens/ChatScreen";
import ChatRoomScreen from "../screens/MainScreens/ChatRoomScreen";

import HomeScreen from "../screens/MainScreens/HomeScreen";
import PostScreen from "../screens/MainScreens/PostScreen";
import CommentsScreen from "../screens/MainScreens/CommentsScreen";
import RepliesScreen from "../screens/MainScreens/RepliesScreen";
import UserScreen from "../screens/MainScreens/UserScreen";



import ProfileScreen from "../screens/MainScreens/ProfileScreen";
import SettingScreen from "../screens/MainScreens/SettingScreen";
import GalleryScreen from "../screens/MainScreens/user/GalleryScreen";
import MutualFriendsScreen from "../screens/MainScreens/user/MutualFriendsScreen";
import MutualGroupsScreen from "../screens/MainScreens/user/MutualGroupsScreen";
import PostsScreen from "../screens/MainScreens/user/PostsScreen";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()



function Home_nav({navigation,route}){




    return(
        <Stack.Navigator
        initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Comment" component={CommentsScreen} />
            <Stack.Screen name="Replies" component={RepliesScreen} />
            <Stack.Screen name="User" component={UserScreen}/>
        </Stack.Navigator>
    )
}

function Chat_nav({navigation,route}){



    return(
        <Stack.Navigator
        initialRouteName="Chat"
        >
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        </Stack.Navigator>
    )
}



function Profile_nav({navigation,route}){

    // const RouteWithTab = ["Profile",]

    // useLayoutEffect(() => {
    //     if(RouteWithTab.includes(getFocusedRouteNameFromRoute(route))){
    //         navigation.setOptions({tabBarStyle: {display: 'flex'}})
    //     }
    //     else{
    //         navigation.setOptions({tabBarStyle: {display: 'none'}})
    //     }
    // },[navigation, route])


    return(
        <Stack.Navigator
        initialRouteName="Profile"
        >
            <Stack.Screen name="Profile" component={ProfileScreen} 
            options={({navigation,route}) => ({
                headerTitle: "My Profile",
                headerRight: () => (
                  <IconButton 
                  onPress={() => navigation.navigate('Setting')}
                  borderRadius="full" variant="ghost" size="md" icon={<Icon as={AntDesign} name="setting" />}/>
                )
              })}
            />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="user_gallery" component={GalleryScreen} />
            <Stack.Screen name="user_posts" component={PostsScreen} />
            <Stack.Screen name="user_mutualfriends" component={MutualFriendsScreen} />
            <Stack.Screen name="user_mutualgroups" component={MutualGroupsScreen} />
        
        
        </Stack.Navigator>
    )
}


export default function Global_nav() {


    const RoutesWithTab = ["Home_nav","Chat_nav","Profile_nav"]
  
    return (
    <Tab.Navigator
    initialRouteName="Home_nav"
      screenOptions={
        ({navigation,route}) => ({
          tabBarIcon:({focused,color,size}) => {
            let iconName;
            let iconVector;
            let iconColor = focused? "orange.500" : "warmGray.400"
            switch(route.name){
              case 'Home_nav':
                iconName='home'
                iconVector=AntDesign
                break;
              case 'Chat_nav':
                iconName='chat'
                iconVector=Entypo
                break;
              case 'Profile_nav':
                iconName='user'
                iconVector=AntDesign
                break;
            }
            return <Icon as={iconVector} name={iconName} size="md" color={iconColor}/>
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false,
        })
      }
    >
        <Tab.Screen name="Home_nav" component={Home_nav} options={{title:'Home'}}/>
        <Tab.Screen name="Chat_nav" component={Chat_nav} options={{ title:'Chat',tabBarBadge: 3 }}/>
        <Tab.Screen name="Profile_nav" component={Profile_nav} options={{title:'Profile'}}/>
    </Tab.Navigator>
  );
}

