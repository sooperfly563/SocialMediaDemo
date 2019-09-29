import React from "react";
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, KeyboardAvoidingView,
 } from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as Font from 'expo-font'


import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl2ZWx5LXRydXRoLTYifQ.RXtlpiT6xy4MnTbFRkXW_mwLUmEJXtkCyM5ibogZlUo';
const SCREEN_WIDTH = Dimensions.get('window').width;

const user = {
  id: 'lively-truth-6',
  name: 'Lively truth',
  image:
    'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10385550_10153056539665820_6068805647158348556_n.jpg?_nc_cat=105&_nc_oc=AQkrs_udI1fuIc5eK1aTXWAurAnhJLCWEjZ4BqiJB8fQJMUcsjV_JzFhTDN5cXLZIph0WzH6sy4-wSrdV-KZOcJf&_nc_ht=scontent-lax3-1.xx&oh=8bc43d84cceb5716ce8e10286e9368e3&oe=5DDAE40E',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
  fontLoaded: false
}
}
 async componentDidMount(){
      await Font.loadAsync({
        'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratB': require('../assets/fonts/Montserrat-Bold.ttf'),
      }).then(() => {
      this.setState({fontLoaded: true})
    })

    }
  render() {
    const channel = chatClient.channel("messaging", "lively-truth-6");
    channel.watch();

    return (
      <View style={{ flexDirection: 'column', marginTop:-30,}}>
       <View style={{flexDirection: 'column', marginTop: 20, padding: 5, borderRadius: 10, backgroundColor: 'rgba(0, 162, 255, 1)', shadowOpacity: 0.6,
    shadowRadius: 6,shadowOffset: { width: 0, height: 2 },
    shadowColor: '#007ecc'}}>
        <View
    style={{ flexDirection: 'row', backgroundColor: 'rgba(0, 162, 255, 1)', borderBottomRadius: 10, marginTop:25, }}
  >
        <Icon containerStyle={{ marginTop: -5 }}
        reverse
  name='arrow-back'
  type='material'
  color='#517fa4'
   size= {17}/>
      </View>
  <Avatar 
        size="medium"
        containerStyle={{ alignSelf: 'center', position: 'absolute', justifyContent: 'center', marginTop:28 }}
        rounded
        source={{
    uri:
      'https://i.ytimg.com/vi/58R-WRSV_A0/maxresdefault.jpg',
  }}
  />
      </View>
      <KeyboardAvoidingView behavior= 'position'>
    <View style={{ marginTop:-146}}>
      <Input
        containerStyle={{
          backgroundColor: 'white'
        }}
        placeholder='Enter Message'
        leftIcon={
          <Icon
            reverse
            name='add'
            type='material'
            size={14}
            color='#009dff'
            containerStyle={{marginLeft:-20}}
          />
          }
          rightIcon={
         <View style={{backgroundColor: '#009dff', padding: 6,paddingRight:8,paddingLeft:8, borderRadius: 20}}>
              { this.state.fontLoaded == true ? (
    <Text style={{fontFamily:'Montserrat', fontSize:20, color:'white'}}>Send</Text>
    ) : (<Text> Loading...</Text>)
      }
  </View>
          }
      />
    </View>
  </KeyboardAvoidingView>
</View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <ChannelScreen />;
  }
}