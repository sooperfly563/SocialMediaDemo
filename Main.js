import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';


export class Main extends Component {
  render() {
    return (
      <View>
        <Text>This is the Main screen</Text>
        <Button
  onPress={() => navigation.navigate('LoginScreen')}
  title="Fucka U"
  color="#841584"
/>
      </View>
    )
  }
}

export default Main;