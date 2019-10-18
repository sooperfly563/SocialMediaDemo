import React from "react";
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, SafeAreaView, KeyboardAvoidingView,
 } from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Pic from '../images/ItsJessPicture.jpg';

import * as Font from 'expo-font'

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ChannelScreen extends React.Component {
    constructor(props) {
  super(props);
  this.state = {
  fontLoaded: false,
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
    const { navigation } = this.props.navigation;
    return (
      <View style={{ flexDirection: 'column', marginTop:-30, justifyContent:'space-between', flex:1}}>
       <View style={{flexDirection: 'column', marginTop: 26, padding: 5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'rgba(0, 162, 255, 1)', shadowOpacity: 0.6,
    shadowRadius: 6,shadowOffset: { width: 0, height: 2 },
    shadowColor: '#007ecc'}}>
        <View
    style={{ flexDirection: 'row', backgroundColor: 'rgba(0, 162, 255, 1)', borderBottomRadius: 10, marginTop:25, }}
  >
        <Icon
        reverse
  name='arrow-back'
  type='material'
  color='#517fa4'
   size= {17}
   onPress= {() => this.props.navigation.goBack()}
   />
      </View>
  <Avatar 
        size="medium"
        containerStyle={{ alignSelf: 'center', position: 'absolute', justifyContent: 'center', marginTop:33 }}
        rounded
        source={this.props.navigation.state.params.avatarPicture}
  />
      </View>
      <KeyboardAvoidingView behavior= 'position'>
    <View style={{marginBottom:2}}>
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
            size={17}
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