import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, } from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import Modal from "react-native-modal";
import * as Font from 'expo-font'

export const light = '../assets/fonts/Montserrat-Bold.ttf';
const SCREEN_WIDTH = Dimensions.get('window').width;

export class Main extends Component {

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

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1, width: SCREEN_WIDTH, backgroundColor: 'rgba(0, 162, 255, 1)'}}>
        <View style={{ marginTop: 20}}>
        <View
    style={{ flexDirection: 'row'}}
  >
        <Icon containerStyle={{ marginTop: -5 }}
        reverse
  name='menu'
  type='material'
  color='#517fa4'
   size= {17}/>
          { this.state.fontLoaded == true ? (
        <Text style={{ fontSize: 40, fontFamily: 'Montserrat', color:'white'}}>Home</Text>
        ) : (<Text> Loading...</Text>)
      }
      </View>
        <Icon containerStyle={{ alignSelf: 'flex-end', position: 'absolute', justifyContent: 'flex-end', marginTop: -5 }}
        reverse
  name='ios-search'
  type='ionicon'
  color='#517fa4'
   size= {17}/>
      </View>
      <View style={{ height: 80 }}>
        <ScrollView
                    style={{ flex: 1,  backgroundColor: '#e6e6e6', height: 20, marginTop: 5, borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                  >
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 15}}>
        <Avatar 
        size="medium"
        containerStyle={{ marginLeft:10, marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        overlayContainerStyle={{backgroundColor: 'rgba(0, 162, 255, 1)'}}
        icon={{name: 'message-plus', type: 'material-community', color:'#ffffff'}}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={{
    uri:
      'https://media.gettyimages.com/videos/close-up-portrait-smiling-man-wearing-stocking-cap-and-eyeglasses-video-id621546132?s=640x640',
  }}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
    onPress={() => this.props.navigation.navigate('ChatScreen')}
        rounded
        source={{
    uri:
      'https://i.ytimg.com/vi/58R-WRSV_A0/maxresdefault.jpg',
  }}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={{
    uri:
      'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg',
  }}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={{
    uri:
      'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/dead-inside2.jpg',
  }}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={{
    uri:
      'https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2015/04/14/smiling.jpg',
  }}
  />
  <Avatar 
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={{
    uri:
      'https://file.kelleybluebookimages.com/kbb/base/house/1999/1999-Chevrolet-Tahoe-FrontSide_CTTAH4D996_505x351.jpg',
  }}
  />
          </View>
        </ScrollView>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>
         <View style={{ flexDirection: 'column', marginTop: 5}}>
        <TouchableHighlight onPress={this.toggleModal} underlayColor="white">
<Card
image={{uri: 'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg'}}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        size="small"
        rounded
        source={{
    uri:
      'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg',
  }}
  />
    </View>
    <View style={{flexDirection:'row'}}>
 <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community'}}
      overlayContainerStyle={{backgroundColor: '#ff4284',marginLeft:5}}
        reverse
   size='small'/>
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
    </View>
  </View>
    { this.state.fontLoaded == true ? (
      <View style={{flexDirection:'row'}}>
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>Its_Jess:</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}> The Photoshoot was so fun! I loved it!</Text>
  </View>
            ) : (<Text> Loading...</Text>)
      }
          <Text style={{marginTop:4, color:'#878787'}}>View all 48 comments</Text>
</Card>
</TouchableHighlight>
</View>
<Modal animationIn="zoomInDown" animationOut="zoomOutDown" animationInTiming={700}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
           isVisible={this.state.isModalVisible}>
            <Image source={{uri: 'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg'}}
            style={{width: SCREEN_WIDTH - 20,
                    height: 300, justifyContent: 'center', alignSelf: 
                    'center' }}/>
                    <Card
containerStyle={{ width: SCREEN_WIDTH - 20, marginTop: 0,  justifyContent: 'center', alignSelf: 
                    'center' }}>
<View style={{ flexDirection:'row' }}>
      <Avatar 
        size="small"
        rounded
        source={{
    uri:
      'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg',
  }}
  />
  <View style={{ flex:2, flexDirection:'row', justifyContent:'flex-end' }}>
    <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community'}}
      overlayContainerStyle={{backgroundColor: '#ff4284',marginLeft:5}}
        reverse
   size='small'/>
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
   </View>
   </View>
   <View style={{ flexDirection:'row' }}>
    <Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>Its_Jess:</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}> The Photoshoot was so fun! I loved it!</Text>
  </View>
    <Text style={{marginTop:4, color:'#878787'}}>View all 48 comments</Text>
</Card>

            <Button style={{marginTop:0, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 0, borderTopRightRadius: 0, width: SCREEN_WIDTH - 20, alignSelf: 'center', justifyContent: 'center'}} title="Close" onPress={this.toggleModal} />
        </Modal>
<Card
image={{uri: 'https://phz8.petinsurance.com/-/media/all-phz-images/2016-images-850/dogandcatonbed850.jpg'}}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        size="small"
        rounded
        source={{
    uri:
      'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1',
  }}
  />
    </View>
    <View style={{flexDirection:'row'}}>
 <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community', color: '#ff4284'}}
      overlayContainerStyle={{marginLeft:5}}
        reverse
   size='small'/>
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
    </View>
  </View>
    { this.state.fontLoaded == true ? (
      <View style={{flexDirection:'row'}}>
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>Animal_Luver:</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}> AWW! Look at them sleep!!</Text>
  </View>
            ) : (<Text> Loading...</Text>)
      }
          <Text style={{marginTop:4, color:'#878787'}}>View all 69 comments</Text>
</Card>
<Card
image={{uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        size="small"
        rounded
        source={{
    uri:
      'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2016/12/Lens-1.jpg?fit=717%2C478&ssl=1',
  }}
  />
    </View>
    <View style={{flexDirection:'row'}}>
 <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community', color: '#ff4284'}}
      overlayContainerStyle={{marginLeft:5}}
        reverse
   size='small'/>
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
    </View>
  </View>
    { this.state.fontLoaded == true ? (
      <View style={{flexDirection:'row'}}>
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>Kyl3_Rayn3r:</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}> Look at the scenery</Text>
  </View>
            ) : (<Text> Loading...</Text>)
      }
          <Text style={{marginTop:4, color:'#878787'}}>View all 23 comments</Text>
</Card>
<Card
image={{uri: 'https://st2.depositphotos.com/2234518/5181/i/450/depositphotos_51818167-stock-photo-family-portrait-with-thumbs-up.jpg' }}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        size="small"
        rounded
        source={{
    uri:
      'https://previews.123rf.com/images/piksel/piksel1505/piksel150500114/40349573-happy-family-at-home.jpg',
  }}
  />
    </View>
    <View style={{flexDirection:'row'}}>
 <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community', color: '#ff4284'}}
      overlayContainerStyle={{marginLeft:5}}
        reverse
   size='small'/>
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
    </View>
  </View>
    { this.state.fontLoaded == true ? (
      <View style={{flexDirection:'row'}}>
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>Smit_Family:</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}> This photo is from our vacation</Text>
  </View>
            ) : (<Text> Loading...</Text>)
      }
          <Text style={{marginTop:4, color:'#878787'}}>View all 3 comments</Text>
</Card>
        </ScrollView>
        <View style={{backgroundColor: 'rgba(0,0,0,0)',alignSelf:'center', justifyContent:'center'}}>
        <Avatar
  rounded
  icon={{name: 'plus', type: 'font-awesome'}}
  containerStyle={{alignSelf:'center', justifyContent:'center',width: 60,  
height: 60,   
borderRadius: 30,            
position: 'absolute',                                          
bottom: 10, shadowOpacity: 0.6,
    shadowRadius: 4,shadowOffset: { width: 0, height: 0 },
    shadowColor: '#007ecc'}}
overlayContainerStyle={{backgroundColor: '#009dff',}}
/>
</View>
      </View>

    )
  }
}

export default Main;