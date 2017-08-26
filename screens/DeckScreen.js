import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../comonents/Swipe';
import { MapView } from 'expo';
import {Card,Button,Icon} from 'react-native-elements';
import * as actions from '../actions';

class DeckScreen extends Component {

    constructor(props){
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Jobs',
            tabBarIcon:(({tintColor}) => <Icon name="description" size={30} color={tintColor}/>)
        }
    }
    renderCard(job){
        const initialRegion = {
            longitude:job.longitude,
            latitude:job.latitude,
            longitudeDelta:0.045,
            latitudeDelta:0.02
        }

        return(
             <Card title={job.jobtitle} >
                 <View style={{height:300}}>
                     <MapView
                         scrollEnabled={false}
                        style={{flex:1}}
                         cacheEnabled={Platform.OS === 'android' ? true :false }
                         initialRegion={initialRegion}
                     >
                     </MapView>
                 </View>
                <View style={styles.datailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>

                </View>
                 <View>
                     <Text>
                         {job.snippet.replace(/<b>/g,'').replace(/<\/b>/g,'')}
                     </Text>
                 </View>
             </Card>
        );
    }
    renderNoMoreCards = () => {
        return(
            <Card title="No More Cards">
                <Button
                    title="Back To Map"
                    backgroundColor="#03A9F4"
                    large
                    icon={{name:'my-location'}}
                    onPress={() => this.props.navigation.navigate('map')}

                />
            </Card>
        );
    }

  render() {

    return (
      <View>
        <Swipe
            data={this.props.jobs}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            keyProp="jobkey"
            onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles={
    datailWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    }
}

mapStateToProps = (jobs) =>{

    return { jobs:jobs.jobs.results }
}

export default connect(mapStateToProps,actions)(DeckScreen);
