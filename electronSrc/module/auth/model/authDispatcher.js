/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {synthesize} from "redux-dispatcher";


const mapDispatchToAC = {
  signIn: (username, password) => ({username, password}),

  saveToken: token => ({token}),

  signOut: {}
};

export default synthesize('auth', mapDispatchToAC);