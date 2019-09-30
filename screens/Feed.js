import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, } from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import Modal from "react-native-modal";
import * as Font from 'expo-font'

export const light = '../assets/fonts/Montserrat-Bold.ttf';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class FeedScreen extends Component {

	  constructor(props) {
  		super(props);
  		this.state = {
  			txt: ["Hello", "My", "Friend"],
    		tuxt: ["Whats","up","Bussy"],
    		key: [0,1,2]
		}
	}
	renderFeed = () =>{
    return this.state.map((card) => {
      return (
      	<View style={{flexDirection: 'row'}}>
          <Text key={card}>{card.txt}</Text>
          <Text key={card}>{card.tuxt}</Text>
          </View>
        )
    })
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.renderFeed()}
      </View>
    );
  }
}
