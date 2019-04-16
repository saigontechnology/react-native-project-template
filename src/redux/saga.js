/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {all, fork} from 'redux-saga/effects';
import authWatcher from "../module/auth/model/authSaga";


export default function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(profileWatcher),
    fork(homeWatcher),
  ])
}