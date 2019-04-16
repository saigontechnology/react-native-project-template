/**
 * @author Lê Quốc Dương on 2019-01-30
 */

import React from "react";
import { BackHandler, StatusBar, Platform } from "react-native";
import store, { persistor } from "./redux/store";
import { Provider } from "react-redux";
import RootNavigator from "./router/navigator/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";
import NavigationService from "./router/navigation/NavigationService";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator
            ref={navigatorRef => {
              NavigationService.setNavigator(navigatorRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}

// a wrapper around console.log to help checking and logging under __DEV__ mode
global.devLog = (tag, message) => {
  if (__DEV__) {
    if (!message) console.log(tag);
    else console.log(tag, message);
  }
};
