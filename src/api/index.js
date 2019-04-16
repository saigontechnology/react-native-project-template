/**
 * Author: Quan Vo
 * Date: 12/11/18
 */

import axios from "axios";
import {call} from "redux-saga/effects";
import {get} from "lodash";
import {Alert} from "react-native";


/**
 * config axios and api url
 * other api configs must be setup here
 */
export const baseUrl = "https://rkistage.app.kaercher.com";
// export const baseUrl = "https://rkidev.app.kaercher.com";

axios.defaults.baseURL = baseUrl + '/api/';
axios.defaults.timeout = 10000;

/**
 * usage: call this function to request api in non-generator functions
 * @param: config: {url, headers, method, data}
 * url: string
 * headers: object
 * method: default is 'get'
 * data: object (body to be submitted)
 */
export default async function request(config, directResult = false) {
  // must use 'then' and 'catch' to get the 'error' (if exists). Using try catch will not get the error (undefined)
  // in 'then', must return a Promise so the outer await will get the value = response.data

  devLog("config::" + config.url, config);
  return await axios(config)
      .then(response => {
        devLog("response::" + config.url, response);
        if (
            (response && response.status === 200) ||
            response.status === 201 ||
            response.status === 204
        )
          return Promise.resolve(response.data || true);
      })
      .catch(error => {
        devLog("error::", error);

        if (directResult)
          return {isError: true, error};

        displayError(error);
      });
}

/**
 * usage: call this function to request api in generator functions
 */
export function* requestSaga(config, directResult) {
  return yield call(request, config, directResult);
}

const displayError = error => {
  const statusCode = get(error, "response.status", -1);
  if (statusCode > 0) {
    switch (statusCode) {
      case 500:
        alert('Internal Server Error');
        return;

      case 503:
        Alert.alert('Service Unavailable', 'The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later');
        return;
    }
  }

  if (error.message === 'Network Error') {
    alert('Network error\nPlease try again later.');
    return;
  }

  alert(get(error, "response.data.message", "Something went wrong\nPlease try again later."));
}
