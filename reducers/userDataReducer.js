/* @flow */


import * as Constants from "./constants";

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
  fcmToken: null,
  mission: {
    isDoing: false,
    imageName: null,
    imageUrl: null,
    missionPK: null,
  }
}

export default function userDataReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.LOGIN:
      console.log('login in userDataReducer')
      return {
          ...state,
        token: '',
        userPK: null,
        isLogging: true,
      }
    case Constants.LOGIN_SUCCESS:
      console.log('loginSuccess in userDataReducer')
      return {
          ...state,
        token: action.token,
        isLogging: false,
        userPK: action.userPK,
        isLogin: true,
        fcmToken: action.fcmToken
      }
    case Constants.LOGIN_FAILURE:
      console.log('loginFailure in userDataReducer')
      return {
          ...state,
        token: '',
        isLogging: false,
        userPK: null,
        isLogin: false,
      }
    case Constants.LOGOUT:
      return {
          ...state,
        isLogin: false,
        userPK: null,
        userInfo: initialState.userInfo,
        fcmToken: null,
      }
    case Constants.SET_IS_MISSION_DOING:
      return {
        ...state,
        mission: {
          ...state.mission,
          isDoing: action.doing,
          missionPK: action.missionPK
        }
      }
    case Constants.SET_MISSION_IMAGE_NAME:
      return {
        ...state,
        mission: {
          ...state.mission,
          imageName: action.imageName
        }
      }
    case Constants.SET_MISSION_IMAGE_URL:
      return {
        ...state,
        mission: {
          ...state.mission,
          imageUrl: action.imageUrl
        }
      }
    default:
      // console.log('default in userDataReducer')
      return state
  }
}
