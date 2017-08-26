/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
const React1 = require('react-native');

const {ReactNativeImageCropping} = React1.NativeModules;
const originalImage = require('./di.jpg');

export default class Crop extends Component {
    renderimage(){
        ReactNativeImageCropping
            .cropImageWithUrl('http://www.charlestonbakeryanddeli.com/images/T12.jpg')
            .then(image => {
                debugger
                    //Image is saved in NSTemporaryDirectory!
                    //image = {uri, width, height}
                },
                err => {
                debugger
                    console.log(err)
                });
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.renderimage()}>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Crop', () => Crop);
