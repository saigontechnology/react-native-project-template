/**
 * Author: Quan Vo
 * Date: 2/23/19
 */

import {synthesize} from "redux-dispatcher";

const mapDispatchToAC = {
  hideLoading: {loading: false},

  /**
   * sometimes we want to save the previous screen before navigate so that we can go back to that screen later
   */
  savePrevScreen: prevScreen => ({prevScreen})
};

export default synthesize('screen', mapDispatchToAC);