/* @flow */

import * as Constants from "./constants";

export const missionType = {
  drawing: 'DRAWING',
  capturing: 'CAPTURING',
  writing: 'WRITING'
}

export const benefitType = {
  imagination: 'IMAGINATION',
  breakingRule: 'BREAKING_RULE',
  concentrating: 'CONCENTRATING',
  curiosity: 'CURIOSITY',
  observation: 'OBSERVATION',
  feeling: 'FEELING',
}

export const missionToShowType = {
  todayMission: 'TODAY',
  pushMission: 'PUSH'
}

export const missionModel = {
  missionPK: null,
  leadText: null,
  mission: {
    type: null,
    text: null,
  },
  benefit: {
    type: null,
    text: null
  },
  time: null,
}

const initialState = {
  todayMission: {
    fetching: false,
    isFetched: false,
    fetchError: false,
    isDone: false,
    mission: missionModel,
    fetchedDate: null,
  },
  isPushMissionRequested: false,
  isPushMissionRequestedError: false,
  pushMission: {
    fetching: false,
    isFetched: false,
    fetchError: false,
    isDone: false,
    pushedDate: null,
    expireTime: null,
    mission: missionModel,
  },
  missionToShow: missionToShowType.todayMission

}


export default function missionDataReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_TODAY_MISSION:
      return {
        ...state,
        todayMission: {
          ...state.todayMission,
          fetching: true,
          fetchError: false,
        }
      }
    case Constants.GET_TODAY_MISSION_SUCCESS:
      return {
        ...state,
        todayMission: {
          ...state.todayMission,
          fetching: false,
          isFetched: true,
          mission: action.mission,
          fetchedDate: action.fetchedDate
        }
      }
    case Constants.GET_TODAY_MISSION_FAILURE:
      return {
        ...state,
        todayMission: {
          ...state.todayMission,
          fetching: false,
          isFetched: false,
          fetchError: true,
        }
      }
    case Constants.GET_NOTIFICATION_MISSION:
      return {
        ...state,
        pushMission: {
          ...state.pushMission,
          fetching: true,
          fetchError: false,
          isFetched: false,
        }
      }
    case Constants.GET_NOTIFICATION_MISSION_SUCCESS:
      return {
        ...state,
        pushMission: {
          ...state.pushMission,
          fetching: false,
          isFetched: true,
          pushedDate: action.pushedDate,
          expireTime: action.expireTime,
          mission: action.mission
        }
      }
    case Constants.GET_NOTIFICATION_MISSION_FAILURE:
      return {
        ...state,
        pushMission: {
          ...state.pushMission,
          fetching: false,
          fetchError: true,
        }
      }
    case Constants.REQUEST_NOTIFICATION:
      return {
        ...state,
        isPushMissionRequested: false,
        isPushMissionRequestedError: false,
      }
    case Constants.REQUEST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isPushMissionRequested: true,
        isPushMissionRequestedError: false,
      }
    case Constants.REQUEST_NOTIFICATION_FAILURE:
      return {
        ...state,
        isPushMissionRequested: false,
        isPushMissionRequestedError: true
      }
    case Constants.SET_MISSION_TO_SHOW_TYPE:
      return {
          ...state,
        missionToShow: action.missionToShowType
      }
    default:
      return state
  }
}
