import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, } from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import Modal from "react-native-modal";
import * as Font from 'expo-font'
import Pic1 from '../images/ItsJessPicture.jpg';
import Pic2 from '../images/AnimalLuverPicture.jpg';
import Pic3 from '../images/AnimalLuverAvatar.jpg';
import Pic4 from '../images/Kyl3Rayn3rPicture.jpg';
import Pic5 from '../images/Kyl3Rayn3rAvatar.jpg';
import Pic6 from '../images/SmithFamilyPicture.jpg';
import Pic7 from '../images/SmithFamilyAvatar.jpg';

export const light = '../assets/fonts/Montserrat-Bold.ttf';
const SCREEN_WIDTH = Dimensions.get('window').width;

export class Main extends Component {

  constructor(props) {
  super(props);
  this.state = {
  fontLoaded: false,
  feed: [{
    username: ["Its_Jess: ", "Animal_Luver: ", "Kyl3_Rayn3r: ", "Smith_Family: "],
    caption: ["The New Photoshoot was so much fun!", "AWWWW Look at them sleep!!", "Beautiful swim", "This photo is from our vacation <3"],
    coments: ["View All 49 Comments", "View All 19 Comments", "View All 69 Comments", "View All 4 Comments"],
    photo:[Pic1,Pic2,Pic4,Pic6],
  }]
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
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
renderFeed = () => {
    return this.state.feed.map((card, index) => {
      return card.username.map((username, i) => {
        if(card.caption[i])
          return (
            <View>
            <TouchableHighlight onPress={this.toggleModal} underlayColor="white">
            <Card
            key={`${i}_${index}`}
image={card.photo[i]}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        size="small"
        rounded
        source={card.photo[i]}
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
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>{username}</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}>{card.caption[i]}</Text>
  </View>
            ) : (<Text> Loading...</Text>)
      }
          <Text style={{marginTop:4, color:'#878787'}}>{card.coments[i]}</Text>
</Card>
</TouchableHighlight>
<Modal 
animationIn="zoomInDown" 
animationOut="zoomOutDown" 
animationInTiming={700}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
           isVisible={this.state.isModalVisible}>
            <Image source={card.photo[i]}
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
        source={card.photo[i]}
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
    <Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}}>{username}</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}}>{card.caption[i]}</Text>
  </View>
    <Text style={{marginTop:4, color:'#878787'}}>{card.coments[i]}</Text>
</Card>

            <Button style={{marginTop:0, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 0, borderTopRightRadius: 0, width: SCREEN_WIDTH - 20, alignSelf: 'center', justifyContent: 'center'}} title="Close" onPress={this.toggleModal} />
        </Modal>
        </View>
          );
        return <React.Fragment />;
      });
    })
}
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
{this.renderFeed()}
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