import { Permissions,Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";


export default async () => {

    const {existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
debugger;
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }


    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }



    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();


    // Notifications.getExponentPushTokenAsync()

    // let previousToken = AsyncStorage.getItem('pushtoken');
   // console.log(previousToken)
   //  if(previousToken){
   //      debugger
   //      return;
   //  }else{
// debugger
//     const  { existingStatus }  = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//
//     debugger
//
//
//      let finalStatus = existingStatus;
//     // if(finalStatus !== 'granted'){
//     //         let { status }= await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
//     //     finalStatus = status;
//     //
//     // }
//     if(finalStatus !== 'granted'){
//         return;
//     }
//     debugger
//
//     let token = await Notifications.getExpoPushTokenAsync();
//     debugger
//
//     //  let token= await Notifications.getExponentPushTokenAsync();
    debugger
        console.log(token);
//ExponentPushToken[RaJavmGw-9PwLkTJ6vPIf7]
        axios.post(PUSH_ENDPOINT,{token:{token}})
        AsyncStorage.setItem('pushtoken',token);
    //}
}
