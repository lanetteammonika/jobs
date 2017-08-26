import React, { Component } from 'react';
import { View, Text,AsyncStorage } from 'react-native';
import Slides from '../comonents/Slides'
import _ from 'lodash';
import AppLoading from "expo/src/AppLoading.ios";
const SLIDE_DATA=[
  { text: 'Welcome to Job App',color:"#03A9F4"},
    { text: 'Use this to Get a Job',color:"#009688"},
  { text: 'Set your location, then swipe away',color:"#03A9F4"}
];

class WelcomeScreen extends Component {

  state = { token : null }

  async componentWillMount(){
        debugger
      let token = await AsyncStorage.getItem('fb_token');

      if(token){
          this.props.navigation.navigate('map')
          this.setState({token});
      }else{
          this.setState({token:false});
      }
  }


  onSlidebugger
    this.props.navigation.navigate('auth');
  }
  render() {
      debugger
      // if(_.isNull(this.state.token)){
      //   debugger
      //   return  <AppLoading />
      // }

    return (

        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)}/>
    );
  }
}
export default WelcomeScreen;
