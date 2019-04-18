/**
 * Author: Quan Vo
 * Date: 2/23/19
 */

import screenDispatcher from "./screenDispatcher";
import notificationDispatcher from "../../../notification/model/notificationDispatcher";
import approvalDispatcher from "../../../article/approval/model/approvalDispatcher";
import homeDispatcher from "../../../home/model/homeDispatcher";
import authDispatcher from "../../../auth/model/authDispatcher";
import welcomeDispatcher from "../../../welcome/model/welcomeDispatcher";
import orgDispatcher from "../../../org/model/orgDispatcher";
import articleDispatcher from "../../../article/editor/model/articleDispatcher";
import settingDispatcher from "../../../setting/model/settingDispatcher";
import phonebookDispatcher from "../../../phonebook/model/phonebookDispatcher";
import canteenDispatcher from "../../../canteen/model/canteenDispatcher";
import newsDispatcher from "../../../news/model/newsDispatcher";
import documentDispatcher from "../../../document/model/documentDispatcher";
import approveProfileDispatcher from "../../../reply/profile/model/approveProfileDispatcher";


const initialState = {
  loading: false,
};

export default screenDispatcher(initialState, {
  [[
    authDispatcher.signIn
  ]]: {loading: true},

  [[
    authDispatcher.saveToken,

    screenDispatcher.hideLoading,
  ]]: {loading: false}
});
