import React, { Component } from 'react';
import { View, Text,Platform,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions'
import {Button} from 'react-native-elements';

class SettingsScreen extends Component {
    constructor(props){
        debugger
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle:{marginTop: Platform.OS === 'android' ? 24 : 0 }
        }
    }

  render() {
        debugger
      let previousToken = AsyncStorage.getItem('pushtoken');

      return (
      <View>
        <Button
            title="Reset Liked Jobs"
            large
            icon={{name:'delete-forever'}}
            backgroundColor="#F44336"
            onPress={this.props.clearLikedJobs}
        />
          <Text>sfddsv </Text>
      </View>
    );
  }
}
  export default connect(null,{clearLikedJobs})(SettingsScreen)
