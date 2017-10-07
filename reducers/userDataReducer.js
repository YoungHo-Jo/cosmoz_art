/* @flow */


import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "./constants";

const initialState = {
  isLogin: false,
  token: '',
  userPK: null,
  isLogging: false,
  error: false,
  userInfo: {
    nickName: '닉네임',
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
        fcmToken: action.fcmToken
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
    case LOGOUT:
      return {
          ...state,
        isLogin: false,
        userPK: null,
        userInfo: initialState.userInfo,
        fcmToken: null,
      }
    default:
      console.log('default in userDataReducer')
      return state
  }
}
