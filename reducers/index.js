/* @flow */

import userData from './userDataReducer'
import missionData from "./missionDataReducer";

import {combineReducers} from "redux";

import * as Constants from "./constants";

export const INITIAL_VIEW_PAGE = 1
export const INITIAL_PAGE = Constants.PAGES.leadText
const initialState = {
  isMyPageDropDownListShow: false,
  currentViewPage: INITIAL_VIEW_PAGE,
  initialViewPage: INITIAL_VIEW_PAGE,
  currentPage: INITIAL_PAGE,
  isPopupShown: false,
  popupContent: {
    dialogText: '',
    leftBtnFunc: null,
    rightBtnFunc: null,
  },
  titleBar: {
    leftBtnShow: false,
    leftBtnFunc: null,
    rightBtnShow: false,
    rightBtnFunc: null
  },
  modal: {
    show: false,
    content: null
  }
}

function controlFlowReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE:
      console.log('reducer: ' + Constants.SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE + ': ' + action.isShown)
      return {
          ...state,
        isMyPageDropDownListShow: action.isShown
      }
    case Constants.SET_CURRENT_VIEWPAGE:
      console.log('reducer: ' + Constants.SET_CURRENT_VIEWPAGE + ': ' + action.currentViewPage)
      return {
          ...state,
        currentViewPage: action.currentViewPage
      }
    case Constants.SET_CURRENT_PAGE:
      console.log('Reducer: ' + Constants.SET_CURRENT_PAGE + ': ' + action.currentPage)
      return {
        ...state,
        currentPage: action.currentPage
      }
    case Constants.SET_POPUP_VISIBILITY:
      console.log('Reducer: ' + Constants.SET_POPUP_VISIBILITY + ': ' + action.visibility)
      return {
        ...state,
        isPopupShown: action.visibility
      }
    case Constants.SET_POPUP_CONTENT:
      console.log('Reducer: ' + Constants.SET_POPUP_CONTENT)
      return {
        ...state,
        popupContent: {
          dialogText: action.dialogText,
          leftBtnFunc: action.leftBtnFunc,
          rightBtnFunc: action.rightBtnFunc
        }
      }
    case Constants.SET_TITLE_BAR_LEFT_BTN:
      console.log('Reducer: ' + Constants.SET_TITLE_BAR_LEFT_BTN)
      return {
        ...state,
        titleBar: {
          ...state.titleBar,
          leftBtnShow: action.leftBtnShow,
          leftBtnFunc: action.leftBtnFunc
        }
      }
    case Constants.SET_TITLE_BAR_RIGHT_BTN:
      console.log('Reducer: ' + Constants.SET_TITLE_BAR_RIGHT_BTN)
      return {
        ...state,
        titleBar: {
          ...state.titleBar,
          rightBtnShow: action.rightBtnShow,
          rightBtnFunc: action.rightBtnFunc
        }
      }
    case Constants.SET_MODAL:
      console.log('Reducer: '+ Constants.SET_MODAL)
      return {
        ...state,
        modal: {
          show: action.show,
          content: action.content
        }
      }
    default:
      return state
  }
}



const rootReducer = combineReducers({
  userData,
  controlFlowReducer,
  missionData,
})

export default rootReducer
