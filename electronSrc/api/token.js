/**
 * Author: Quan Vo
 * Date: 12/11/18
 */

import {Alert, AsyncStorage} from "react-native";
import authDispatcher from "../modules/auth/model/authDispatcher";
import store from "../redux/store";
import request from "./index";
import {anonymousHeader} from "./header";


export const getUserToken = (redirect = true) => {
  const token = store ? store.getState().auth.token : null;
  if (!token && redirect) {
    Alert.alert(
        'Session timeout', 'You will be redirected to Login screen',
        [
          {
            text: 'OK', onPress: () => {
              authDispatcher.signOut();
            }
          }
        ],
        {cancelable: false}
    )
  }
  return token;
};


/**
 * there are 2 cases when we need to send the deviceToken to server
 * [1] when user logging in: already have the token, just send the deviceToken without worrying
 * [2] when the deviceToken changes (due to some reasons): we may or may not have the token at this time
 * [2.1] if user has already logged in, we have the token, just send the deviceToken as usual
 * [2.2] if user has not logged in yet, we don't have the token, don't need to send the deviceToken at this time,
 * just save it in the AsyncStorage and wait for the user to login, go back to case [1]
 * In conclusion, for case [2], we must check if the token exists (user has already logged in) before sendDeviceInfo
 */
export const sendDeviceInfo = async () => {
  const deviceToken = await AsyncStorage.getItem('deviceToken');
  if (deviceToken) {
    const token = getUserToken();
    if (!token)
      return;

    const headers = anonymousHeader();
    headers.Authorization = 'Bearer ' + token;

    const result = await request({
      url: 'user/deviceToken',
      method: 'put',
      data: "'" + deviceToken + "'",
      headers
    });

    //alert(result);
  }
};