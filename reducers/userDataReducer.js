/* @flow */


import * as Constants from "./constants";

const initialState = {
  isLogging: false,
  isLogin: false,
  error: false,
  token: '',
  userPK: null,
  userInfo: {
    nickname: '닉네임',
    accumulationTime: 'Test 300초',
    userText: 'Test 뇌주름 스케일이 반지제왕 급',
    doneMissions: null,
    arts: null,
    artsNeedUpdate: false
  },
  fcmToken: null,
  mission: {
    isDoing: false,
    imageName: null,
    imageURI: null,
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
        isLogging: false,
        isLogin: true,
        token: action.token,
        userPK: action.userPK,
        userInfo: {
          ...state.userInfo,
          nickname: action.nickname,
          userText: action.userText,
          accumulationTime: action.accumulationTime
        },
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
    case Constants.SET_MISSION_IMAGE_URI:
      return {
        ...state,
        mission: {
          ...state.mission,
          imageURI: action.imageURI
        }
      }
    case Constants.GET_USER_ARTS:
      return {
        ...state,
        //// implement of getting state ////
      }
    case Constants.GET_USER_ARTS_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          arts: action.arts
        }
      }
    case Constants.GET_USER_ARTS_FAILURE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          arts: null
          //// Implement of failure ////
        }
      }
    case Constants.SET_ARTS_NEED_UPDATE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          artsNeedUpdate: action.artsNeedUpdate
        }
      }
    case Constants.GET_USER_DONE_MISSIONS:
      return {
        ...state,
        //// Implement of fetching state ////
      }
    case Constants.GET_USER_DONE_MISSIONS_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          doneMissions: action.doneMissions
        }
      }
    case Constants.GET_USER_DONE_MISSIONS_FAILURE:
      return {
        ...state,
        //// Implement of failure ////
      }
    default:
      // console.log('default in userDataReducer')
      return state
  }
}
