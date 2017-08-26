import React from 'react';
import { StyleSheet, Text, View,AsyncStorage,Alert } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import { Notifications } from 'expo';

import registerForNotifications from './services/push_notifications'
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {

  componentDidMount(){

      registerForNotifications();
      Notifications.addListener((notification) =>{
          const {data: {text},origin} =notification;

          if(origin === 'received' && text){
              Alert.alert(
                  'New Push Notication',
                  text,
                  [{text:'ok.'}]
              )
          }
      })
  }

    componentWillUnmount() {
      debugger
        this.registerForNotifications() && this.registerForNotifications().remove();
    }
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: StackNavigator({
            reviewscreen: { screen: ReviewScreen },
            settings: { screen: SettingsScreen }
          })
        }
      },{
            tabBarPosition:'bottom',
          tabBarOptions:{
            labelStyle: {fontSize:12}
          }
        })
    }
  },{
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: true
  });

    return (
        <Provider store={store}>
        <MainNavigator />
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
