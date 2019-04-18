/**
 * Author: Quan Vo
 * Date: 12/11/18
 */

import {call} from 'redux-saga/effects';
import {anonymousHeader} from "./header";
import {requestSaga} from "./index";
import {get} from "lodash";
import axios from "axios/index";


export function* signUp() {
  const body = {};

  const config = {
    url: '',
    headers: anonymousHeader(),
    method: 'post',
    data: body
  };

  const json = yield* requestSaga(config);
  return json;
}

export function* signIn(username, password) {
  if (!username || !password)
    return null;

  const config = {
    url: 'token/login',
    headers: anonymousHeader(),
    method: 'post',
    data: {
      grantType: "password",
      refreshToken: "string",
      username: username,
      password: password,
    }
  };

  const json = yield call(requestSignIn, config);

  if (json && !json.hasOwnProperty("accessToken")) {
    console.log(json);
    if (json.hasOwnProperty("code") && json.hasOwnProperty("message")) {
      throw new Error(
          json.hasOwnProperty("message") ? json["message"] : "" +
          json.hasOwnProperty("code") ? json["code"] : ""
      );
    }
    else {
      throw new Error("Network error while signing in");
    }
  }

  if (!!json)
  return json.accessToken;
}

async function requestSignIn(config) {
  // must use 'then' and 'catch' to get the 'error' (if exists). Using try catch will not get the error (undefined)
  // in 'then', must return a Promise so the outer await will get the value = response.data
  console.log('config', config);
  return await axios(config).then(response => {
    console.debug('response', response);
    if (response && response.status === 200 || response.status === 201)
      return Promise.resolve(response.data || true);
  }).catch(error => {
    console.debug("request error", error);
  });
}