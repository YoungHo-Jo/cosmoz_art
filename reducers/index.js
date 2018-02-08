/* @flow */

import userData from './userDataReducer'
import missionData from "./missionDataReducer";
import artData from './artDataReducer'

import {combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk'

import * as Constants from "./constants";

export const INITIAL_VIEW_PAGE = 1
export const INITIAL_PAGE = Constants.PAGES.leadText
const initialState = {
  isMyPageDropDownListShow: false,
  currentViewPage: INITIAL_VIEW_PAGE,
  initialViewPage: INITIAL_VIEW_PAGE,
  currentPage: INITIAL_PAGE,
  popupDialog: {
    show: false,
    content: null
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
      return {
          ...state,
        isMyPageDropDownListShow: action.isShown
      }
    case Constants.SET_CURRENT_VIEWPAGE:
      return {
          ...state,
        currentViewPage: action.currentViewPage
      }
    case Constants.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case Constants.SET_POPUP:
      return {
        ...state,
        popupDialog: {
          show: action.show,
          content: action.content
        }
      }
    case Constants.SET_TITLE_BAR_LEFT_BTN:
      return {
        ...state,
        titleBar: {
          ...state.titleBar,
          leftBtnShow: action.leftBtnShow,
          leftBtnFunc: action.leftBtnFunc
        }
      }
    case Constants.SET_TITLE_BAR_RIGHT_BTN:
      return {
        ...state,
        titleBar: {
          ...state.titleBar,
          rightBtnShow: action.rightBtnShow,
          rightBtnFunc: action.rightBtnFunc
        }
      }
    case Constants.SET_MODAL:
      return {
        ...state,
        modal: {
          show: action.show,
          content: action.content ? action.content : state.modal.content
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
  artData
})

export default rootReducer
