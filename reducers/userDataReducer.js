

import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "./constants";

const initialState = {
  isLogin: false,
  token: '',
  userPK: null,
  isLogging: false,
  error: false,
  userInfo: {
    accumulationTime: 'Test 300초',
    userText: 'Test 뇌주름 스케일이 반지제왕 급',
    doneMission: null,
    arts: null,
  },
  fcmToken: null
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