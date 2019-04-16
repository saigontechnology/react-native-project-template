/**
 * Author: Quan Vo
 * Date: 7/31/18
 */

import {NavigationActions, StackActions} from "react-navigation";


let _rootNavigator;

function setNavigator(navigatorRef) {
  _rootNavigator = navigatorRef;
}

function navigate(routeName, params) {
  _rootNavigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
  );
}

function getNavigator() {
  return _rootNavigator._navigation;
}

function goBack() {
  _rootNavigator.dispatch(NavigationActions.back());
}

function push(routeName, params) {
  _rootNavigator.dispatch(
      StackActions.push({
        routeName,
        params
      })
  );
}

export default {
  navigate,
  setNavigator,
  getNavigator,
  navigateApp,
  goBack,
  push
};
