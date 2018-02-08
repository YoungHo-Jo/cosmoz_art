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
    time: null
  }
}

export default function userDataReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.LOGIN:
      return {
          ...state,
        token: '',
        userPK: null,
        isLogging: true,
      }
    case Constants.LOGIN_SUCCESS:
      return {
          ...state,
        isLogging: false,
        isLogin: true,
        token: action.token,
        userPK: action.userPK,
        userInfo: {
          ...state.userInfo,
          nickname: action.nickname
        },
        fcmToken: action.fcmToken
      }
    case Constants.LOGIN_FAILURE:
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
    case Constants.GET_USER_TIME_TEXT:
      return {
        ...state,
        /// fetching... ////
      }
    case Constants.GET_USER_TIME_TEXT_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          accumulationTime: action.time,
          userText: action.text
        }
      }
    case Constants.GET_USER_TIME_TEXT_FAILURE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          /// Failure ////
        }
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
    case Constants.SET_DONE_MISSION_TIME:
      return {
        ...state,
        mission: {
          ...state.mission,
          time: action.time
        }
      }
    default:
      return state
  }
}
