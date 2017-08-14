

import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "./constants";

const initialState = {
  isLogin: false,
  token: '',
  userPK: null,
  isLogging: false,
  error: false,
}

export default function userDataReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN:

      console.log('login in userDataReducer')
      return {
          ...state,
        token: '',
        userPK: null,
        isLogging: true,
      }
    case LOGIN_SUCCESS:
      console.log('loginSuccess in userDataReducer')
      return {
          ...state,
        token: action.token,
        isLogging: false,
        userPK: action.userPK,
        isLogin: true,
      }
    case LOGIN_FAILURE:
      console.log('loginFailure in userDataReducer')
      return {
          ...state,
        token: '',
        isLogging: false,
        userPK: null,
        isLogin: false,
      }
    default:
      console.log('default in userDataReducer')
      return state
  }
}