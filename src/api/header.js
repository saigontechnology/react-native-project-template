/**
 * Author: Quan Vo
 * Date: 12/11/18
 */

import {getUserToken} from "./token";


export const authHeader = () => {
  const headers = anonymousHeader();

  const token = getUserToken();
  if (token)
    headers.Authorization = 'Bearer ' + token;

  return headers;
};

export const anonymousHeader = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
});
