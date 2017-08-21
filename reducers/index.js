import userData from './userDataReducer'
import missionData from "./missionDataReducer";

import {combineReducers} from "redux";



import {SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE} from "./constants";


const initialState = {
  isMyPageDropDownListShow: false
}

function controlFlowReducer(state = initialState, action) {
  switch(action.type) {
    case SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE:
      console.log('reducer: ' + SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE)
      return {
        isMyPageDropDownListShow: action.isShown
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