/**
 * Author: Quan Vo
 * Date: 4/16/19
 */

import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from "react-native-iphone-x-helper/index";


export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export const HEADER_MARGIN_TOP = isIphoneX() ? PADDING_TOP + 15 : PADDING_TOP;

export const DRAWER_WIDTH = SCREEN_WIDTH * 0.8;