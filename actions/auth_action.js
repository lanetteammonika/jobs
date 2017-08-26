import { AsyncStorage } from 'react-native';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';
import { Facebook } from 'expo';

export const facebookLogin = () => async(dispatch) => {

  let token = await AsyncStorage.getItem('fb_token');
    debugger
  console.log(token);
  if(token) {
      debugger
      return dispatch({
      type: FACEBOOK_LOGIN_SUCCESS,
      payload: token
    })
  }else {
      doFacebookLogin(dispatch);
  }
}


const doFacebookLogin =  async dispatch => {
    debugger
  let {type,token} = await Facebook.logInWithReadPermissionsAsync('1804640943181066', {
    permissions: ['public_profile']
  });
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }
  await AsyncStorage.setItem('fb_token',token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS,payload: token})
};
