/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {all, call, takeLatest} from 'redux-saga/effects';
import authDispatcher from "./authDispatcher";
import {signIn} from "../../../api/auth";


export default function* authWatcher() {
  yield all([
    takeLatest(authDispatcher.signIn, authWorker.signIn),
  ])
}

const authWorker = {
  signIn: function* ({username, password}) {
    const token = yield* signIn('/api/login', {username, password});
    authDispatcher.saveToken(token);
  }
};