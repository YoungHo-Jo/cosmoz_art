/* @flow */

import * as Constants from './constants'

const shareItem = {
  missionPK: null,
  arts: [],
  keywords: []
}

const initialState = {
  today: shareItem,
  other: []
}

export default function artDataReducer(state = initialState, action) {
  switch(action.type) {
    case Constants.GET_TODAY_ARTS:
      return {
        ...state
        //// Implement For Fetching state ////
      }
    case Constants.GET_TODAY_ARTS_SUCCESS:
      return {
        ...state,
        today: {
          missionPK: action.missionPK,
          arts: action.arts,
          keywords: action.keywords
        }
      }
    case Constants.GET_TODAY_ARTS_FAILURE:
      return {
        ...state,
        //// Implement For fetching Failure ////
      }
    default:
      return state
  }
}
