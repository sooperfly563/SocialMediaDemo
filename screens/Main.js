import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableHighlight, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import { Input, Button, Icon, Avatar, Card, Tile , SearchBar } from 'react-native-elements';
import { cacheFonts } from '../helpers/AssetsCaching';
import Modal from "react-native-modal";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import posed from 'react-native-pose';
import * as Font from 'expo-font'
import Pic1 from '../images/ItsJessPicture.jpg';
import Pic2 from '../images/AnimalLuverPicture.jpg';
import Ava1 from '../images/AnimalLuverAvatar.jpg';
import Pic4 from '../images/Kyl3Rayn3rPicture.jpg';
import Ava2 from '../images/Kyl3Rayn3rAvatar.jpg';
import Pic6 from '../images/SmithFamilyPicture.jpg';
import Ava3 from '../images/SmithFamilyAvatar.jpg';
import Chat1 from '../images/Chat1.jpg';
import Chat2 from '../images/Chat2.jpg';
import Chat4 from '../images/Chat4.jpg';
import Chat5 from '../images/Chat5.jpg';
import Chat6 from '../images/Chat6.jpg';

export const light = '../assets/fonts/Montserrat-Bold.ttf';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export class Main extends Component {

  constructor(props) {
  super(props);
  this.navigate = this.props.navigation.navigate;
  this.state = {
  currentItem: null,
  messageItem: null,
  fontLoaded: false,
  isLiked: [false, false],
  search: false,
  searchBarText: '',
  toggleSroll: false,
  feed: [{
    username: ["Its_Jess: ", "Animal_Luver: ", "Kyl3_Rayn3r: ", "Smith_Family: "],
    caption: ["The New Photoshoot was so much fun!", "AWWWW Look at them sleep!!", "Beautiful swim", "This photo is from our vacation <3"],
    coments: ["View All 49 Comments", "View All 19 Comments", "View All 69 Comments", "View All 4 Comments"],
    photo:[Pic1,Pic2,Pic4,Pic6],
    avatar:[Pic1,Ava1,Ava2,Ava3]
  }],
  chat:[{
    convo:[Chat1,Chat2,Pic1,Chat4,Chat5,Chat6],
  }]
}
}
animation = new Animated.Value(0);
buttonAnimation = new Animated.Value(0);
interpolateBar = this.animation.interpolate({inputRange:[0,1,2], outputRange:['100%','80%','100%']})
moveButton = this.buttonAnimation.interpolate({inputRange:[0,1,2], outputRange:[10,-80,10]})
animatedTransition = Animated.spring(this.animation,{toValue:1})
deAnimatedTransition = Animated.spring(this.animation,{toValue:2})
animatedButton = Animated.spring(this.buttonAnimation,{toValue: 1})
animateButtonBack = Animated.spring(this.buttonAnimation,{toValue: 2})

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

  // Animation Starters
    animateBar = () => {
      this.animatedTransition.start()
    };
    deAnimateBar = () => {
      this.deAnimatedTransition.start()
    };
    animateButton = () => {
      this.animatedButton.start()
    };
    deAnimateButton = () => {
      this.animateButtonBack.start()
    };
// Functions
  toggleModal = (card) => {
    this.setState({ 
      isModalVisible: !this.state.isModalVisible,
      currentItem:card
       });
  };
  toggleScroll = () => {
      {this.state.toggleScroll ?(
        this.setState({
          toggleScroll: !this.state.toggleScroll
        }),
        this.deAnimateButton()
        ) : (
          this.setState({
            toggleScroll: !this.state.toggleScroll
          }),
          this.animateButton()
        )}
  };
    updateSearch = searchBarText => {
    this.setState({ searchBarText });

  };
  toggleLike = (index) => {
    let isLikedArray = this.state.isLiked;

    isLikedArray[index]= !this.state.isLiked[index];
    this.setState({
      isLiked: isLikedArray //Add Each Like to an Array
    });
  };
  toggleSearch = () => {
    {this.state.search ?(
    this.setState({
      search: !this.state.search
    }),
    this.deAnimateBar()
    ) : (
        this.setState({
      search: !this.state.search
    }),
    this.animateBar()
    )}
  };
  openMessage = (bub) => {
    this.setState({
      messageItem:bub
    });
    this.props.navigation.navigate('ChatScreen', { avatarPicture: bub })
  };
  //Render Functions
renderFeed = () => {
    return this.state.feed.map((card, index) => {
      return card.username.map((username, i) => {
        if(card.caption[i])
          return (
            <View key={`${i}_${index}`}>
                { this.state.fontLoaded == true ? (
            <TouchableHighlight //If A Card id pressed, a Modal will open will all the info
            onPress={()=>this.toggleModal({photo:card.photo[i], avatar:card.avatar[i] ,caption:card.caption[i],username:card.username[i],coments:card.coments[i]})}
            underlayColor="white">
            <Card
image={card.photo[i]}
containerStyle={{borderRadius:10, marginRight:1, marginLeft:1,}}>
<View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
  <View style={{ flexDirection: 'row'}}>
    <Avatar 
        key={card.avatar}
        size="small"
        rounded
        source={card.avatar[i]}
  />
    </View>
    <View style={{flexDirection:'row'}}>

    {this.state.isLiked[i] ?(
                        <Avatar
                  rounded
                  icon={{
                    name: 'heart-multiple-outline',
                    type: 'material-community',
                  }}
                  overlayContainerStyle={{
                    backgroundColor: '#ff4284',
                    marginLeft: 5,
                  }}
                  reverse
                  size="small"
                onPress={()=> this.toggleLike(i)}/>
    ) : (
     <Avatar
    rounded
    icon={{ name:'heart-multiple-outline', type:'material-community', color: '#ff4284'}}
   overlayContainerStyle={{marginLeft:5}}
   reverse
   size='small'
   onPress={()=> this.toggleLike(i)}/>
)}
   <Avatar
        reverse
        rounded
  icon={{ name:'comment-processing-outline', type:'material-community' }}
  overlayContainerStyle={{backgroundColor: '#dbdbdb',marginLeft:5}}
   size='small'/>
    </View>
  </View>
      <View style={{flexDirection:'row'}}>
<Text style={{fontFamily: 'MontserratB', color:'#bf00b9', marginTop:10}} key={username}>{username}</Text>
    <Text style={{fontFamily:'Montserrat', marginTop:10}} key={card.caption}>{card.caption[i]}</Text>
  </View>
          <Text style={{marginTop:4, color:'#878787'}} key={card.coments}>{card.coments[i]}</Text>
</Card>
</TouchableHighlight>
) : (<Text>You will never see this hahaha</Text>)
      }
        </View>
          );
        return <React.Fragment />;
      });
    })
}
renderChat = () => {
  return this.state.chat.map((bub, index) => {
    return bub.convo.map((convo, i) => {
      if(bub.convo[i])
      return(
          <Avatar 
          key={i}
        size="medium"
        containerStyle={{ marginRight: 15, shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: 'black' }}
        rounded
        source={bub.convo[i]}
        onPress={() => {this.openMessage(bub.convo[i])}
      }/>
        )
    })
    })
}
  render() {
    return (
      <View style={{ flex: 1, width: SCREEN_WIDTH, backgroundColor: 'rgba(0, 162, 255, 1)'}}>
        <View style={{ marginTop: 26}}>
                          <View>
                                  { this.state.search ? (
                                    <View style={{flexDirection:'row'}}>
                                    <Animated.View style={{width: this.interpolateBar}}>
      <SearchBar 
      inputStyle={{backgroundColor: 'steelblue', color:'white'}}
      inputContainerStyle={{backgroundColor: 'steelblue'}}
      containerStyle={{backgroundColor: 'steelblue', borderWidth: 1, borderRadius: 50, marginLeft:5}}
      onChangeText={this.updateSearch} 
      value={this.searchBarText} 
      placeholder="Search"/>
      </Animated.View>
               <Avatar
  size="medium"
  rounded
  overlayContainerStyle={{backgroundColor: '#517fa4'}}
  icon={{name: 'close', type: 'material', color:'white'}}
  onPress={() => this.toggleSearch()}
  activeOpacity={1}
  containerStyle={{ marginTop:5, marginLeft:10, marginRight:5}}
/>
</View>
            ) : (
        <Animated.View style={{width: this.interpolateBar,flexDirection:'row'}}>
         <Avatar
  size="small"
  rounded
  overlayContainerStyle={{backgroundColor: '#517fa4'}}
  icon={{name: 'menu', type: 'material', color:'white'}}
  onPress={() => this.toggleSearch()}
  activeOpacity={1}
  containerStyle={{ marginTop:5, marginLeft:10, marginRight:5}}
/>
   <View style={{flexDirection:'row', flex:2, alignSelf:'space-between', justifyContent:'space-between'}}>
          { this.state.fontLoaded == true ? (
        <Text style={{ fontSize: 40, fontFamily: 'Montserrat', color:'white'}}>Home</Text>
        ) : (<Text> </Text>)
      }
      <Avatar
  size="small"
  rounded
  overlayContainerStyle={{backgroundColor: '#517fa4'}}
  icon={{name: 'ios-search', type: 'ionicon', color:'white'}}
  onPress={() => this.toggleSearch()}
  activeOpacity={1}
  containerStyle={{ marginTop:5, marginRight:10 }}
/>
      </View>
      </Animated.View>
      )}
                  </View>
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
  {this.renderChat()}
          </View>
        </ScrollView>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} 
        showsVerticalScrollIndicator={false} 
        onScrollEndDrag={() => {this.toggleScroll()}}
        onScrollBeginDrag={() => {this.toggleScroll()}}>
        { this.state.fontLoaded == true ? (
         <View style={{ flexDirection: 'column', marginTop: 5}}>         
{this.renderFeed()}
</View>
) : (<View style={{padding:50}}><ActivityIndicator size="large" color="#0000ff" /></View>)}

{this.state.currentItem && <Modal
          animationIn="zoomInDown"
          animationOut="zoomOutDown"
          animationInTiming={700}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          isVisible={this.state.isModalVisible}>
           <Image source={this.state.currentItem.photo}
            style={{width: SCREEN_WIDTH - 20,
                    height: 300, justifyContent: 'center', alignSelf: 
                    'center' }}/>
          <Card
            containerStyle={{
              width: SCREEN_WIDTH - 20,
              marginTop: 0,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View style={{ flexDirection: 'row' }}>
                  <Avatar 
        size="small"
        rounded
        source={this.state.currentItem.avatar}
  />
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Avatar
                  reverse
                  rounded
                  icon={{
                    name: 'comment-processing-outline',
                    type: 'material-community',
                  }}
                  overlayContainerStyle={{
                    backgroundColor: '#dbdbdb',
                    marginLeft: 5,
                  }}
                  size="small"
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontFamily: 'MontserratB',
                  color: '#bf00b9',
                  marginTop: 10,
                }}>
                {this.state.currentItem.username}
              </Text>
              <Text style={{ fontFamily: 'Montserrat', marginTop: 10 }}>
                {this.state.currentItem.caption}
              </Text>
            </View>
            <Text style={{ marginTop: 4, color: '#878787' }}>
              {this.state.currentItem.coments}
            </Text>
          </Card>

          <Button
            style={{
              marginTop: 0,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              width: SCREEN_WIDTH - 20,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            title="Close"
            onPress={this.toggleModal}
          />
        </Modal>}
        </ScrollView>
        <Animated.View style={{bottom: this.moveButton}}>
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
</Animated.View>
      </View>

    )
  }
}

export default Main;