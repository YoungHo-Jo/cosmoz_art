/* @flow */

import userData from './userDataReducer'
import missionData from "./missionDataReducer";

import {combineReducers} from "redux";



import {SET_CURRENT_VIEWPAGE, SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE} from "./constants";


export const INITIAL_VIEW_PAGE = 1
const initialState = {
  isMyPageDropDownListShow: false,
  currentViewPage: INITIAL_VIEW_PAGE,
  initialViewPage: INITIAL_VIEW_PAGE
}

function controlFlowReducer(state = initialState, action) {
  switch(action.type) {
    case SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE:
      console.log('reducer: ' + SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE + ': ' + action.isShown)
      return {
          ...state,
        isMyPageDropDownListShow: action.isShown
      }
    case SET_CURRENT_VIEWPAGE:
      console.log('reducer: ' + SET_CURRENT_VIEWPAGE + ': ' + action.currentViewPage)
      return {
          ...state,
        currentViewPage: action.currentViewPage
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
