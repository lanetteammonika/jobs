import React, { Component } from 'react';
import { View,ScrollView, Text, Platform,Linking } from 'react-native';
import {Card, Button,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
    constructor(props){
        super(props);
    }
  static navigationOptions = ({ navigation }) => {
    return {
    title: 'Review Jobs',
    tabBarIcon:(({tintColor}) => <Icon name="favorite" size={30} color={tintColor}/>),
    headerRight: <Button
          title="Settings"
          onPress={() => { navigation.navigate('settings') }}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
          />,
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 :0
    }
  }
}

    renderLikedJobs() {
      debugger
      return this.props.likedjobs.map(job => {
          const initialRegion = {
              longitude:job.longitude,
              latitude:job.latitude,
              longitudeDelta:0.045,
              latitudeDelta:0.02
          }
          return(
              <Card key={job.jobkey} title={job.jobtitle} >
                  <View style={{height:200}}>
                      <MapView
                          scrollEnabled={false}
                          style={{flex:1}}
                          cacheEnabled={Platform.OS === 'android' ? true :false }
                          initialRegion={initialRegion}
                      >
                      </MapView>
                      <View style={styles.datailWrapper}>
                          <Text style={styles.datailWrapper}>{job.company}</Text>
                          <Text style={styles.datailWrapper}>{job.formattedRelativeTime}</Text>

                      </View>
                      <Button
                        title="Apply Now!"
                        backgroundColor="#03A9F4"
                        onPress={() => Linking.openURL(job.url)}
                      />
                  </View>
              </Card>
          );
      })
    }

  render() {
    return (
      <ScrollView>
          {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}
const styles={
    datailWrapper:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    },
    italics:{
        fontStyle:'italic'
    }
}

mapStateToProps = (state) =>{
    debugger
    return { likedjobs: state.likedjobs }
}


  export default connect(mapStateToProps)(ReviewScreen);
