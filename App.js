import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { cacheAssets, cacheFonts } from "./helpers/AssetsCaching";
import * as Font from 'expo-font'

import Main from './screens/Main';
import Login from './screens/Login';
import Chat from './screens/Chat';
import Feed from './screens/Feed';

const AppNavigator = createStackNavigator({
  
  LoginScreen: { screen: Login,
  navigationOptions: ({ navigation }) => ({
        header: null,
      }),
       },
  MainScreen: { screen: Main,
  navigationOptions: ({ navigation }) => ({
        header: null,
      }),
       },
        ChatScreen: { screen: Chat,
  navigationOptions: ({ navigation }) => ({
        header: null,
      }),
       },
       FeedScreen: { screen: Feed,
  navigationOptions: ({ navigation }) => ({
        header: null,
      }),
       } 
});

const App = createAppContainer(AppNavigator);

export default App;
