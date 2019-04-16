/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import authDispatcher from "./authDispatcher";

const initialState = {
  token: null,
  loading: false
};

export default authDispatcher(initialState, {
  [authDispatcher.signIn]: {loading: true},

  [authDispatcher.saveToken]: (state, payload) => payload,
})