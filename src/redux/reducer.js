/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import storage from "redux-persist/lib/storage";


const mainReducer = combineReducers({
  ...screenReducer,
  ...authReducer,
  ...homeReducer,
  ...profileReducer,
});

export default rootReducer = (state, action) => {
  if (!!authDispatcher.signOut && action.type === authDispatcher.signOut.type) {

    // clear redux-persist storage
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });
  }
  return mainReducer(state, action);
};