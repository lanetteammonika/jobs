import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    constructor(props){
        super(props);
    }
  componentDidMount() {
      console.log(this.props);
        debugger
    this.props.facebookLogin();
      console.log('token',this.props.token)
    this.onAuthComplete();
  }

  componentWillReceiveProps(nextProps) {
        console.log(nextProps)
      this.onAuthComplete(nextProps);
  }

  onAuthComplete = (props) => {
        console.log(props);
      debugger
      if(props){
          debugger
        this.props.navigation.navigate('map');
      }
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}
mapStateToProps = (state) =>  {
    debugger
    return {
        token : state.auth.token
    };
}

export default connect(mapStateToProps,actions)(AuthScreen);
