/* @flow */

import {
  GET_NOTIFICATION_MISSION, GET_NOTIFICATION_MISSION_FAILURE, GET_NOTIFICATION_MISSION_SUCCESS, GET_TODAY_MISSION,
  GET_TODAY_MISSION_FAILURE,
  GET_TODAY_MISSION_SUCCESS, REQUEST_NOTIFICATION, REQUEST_NOTIFICATION_FAILURE, REQUEST_NOTIFICATION_SUCCESS,
  SET_MISSION_TO_SHOW_TYPE
} from "./constants";

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
    case GET_TODAY_MISSION:
      return {
        ...state,
        todayMission: {
          ...state.todayMission,
          fetching: true,
          fetchError: false,
        }
      }
    case GET_TODAY_MISSION_SUCCESS:
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
    case GET_TODAY_MISSION_FAILURE:
      return {
        ...state,
        todayMission: {
          ...state.todayMission,
          fetching: false,
          isFetched: false,
          fetchError: true,
        }
      }
    case GET_NOTIFICATION_MISSION:
      return {
        ...state,
        pushMission: {
          ...state.pushMission,
          fetching: true,
          fetchError: false,
          isFetched: false,
        }
      }
    case GET_NOTIFICATION_MISSION_SUCCESS:
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
    case GET_NOTIFICATION_MISSION_FAILURE:
      return {
        ...state,
        pushMission: {
          ...state.pushMission,
          fetching: false,
          fetchError: true,
        }
      }
    case REQUEST_NOTIFICATION:
      return {
        ...state,
        isPushMissionRequested: false,
        isPushMissionRequestedError: false,
      }
    case REQUEST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isPushMissionRequested: true,
        isPushMissionRequestedError: false,
      }
    case REQUEST_NOTIFICATION_FAILURE:
      return {
        ...state,
        isPushMissionRequested: false,
        isPushMissionRequestedError: true
      }
    case SET_MISSION_TO_SHOW_TYPE:
      return {
          ...state,
        missionToShow: action.missionToShowType
      }
    default:
      return state
  }
}
