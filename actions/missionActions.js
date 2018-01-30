import APIConfig from "../APIConfig";
import {
  GET_NOTIFICATION_MISSION, GET_NOTIFICATION_MISSION_FAILURE, GET_NOTIFICATION_MISSION_SUCCESS, GET_TODAY_MISSION,
  GET_TODAY_MISSION_FAILURE,
  GET_TODAY_MISSION_SUCCESS, REQUEST_NOTIFICATION, REQUEST_NOTIFICATION_FAILURE, REQUEST_NOTIFICATION_SUCCESS,
  SET_MISSION_TO_SHOW_TYPE
} from "../reducers/constants";
import {missionToShowType} from "../reducers/missionDataReducer";
import * as Utills from '../Utills'

// todayMission
export function getTodayMission() {
  return {
    type: GET_TODAY_MISSION
  }
}

export function getTodayMissionSuccess(mission, fetchDate) {
  console.log('Reducer: getTodayMissionSuccess')
  console.log('mission: ', mission)
  console.log('fetchDate: ' + fetchDate)
  mission = {
    ...mission,
    time: Utills.getSecs(mission.time)
  }
  return {
    type: GET_TODAY_MISSION_SUCCESS,
    mission,
    fetchDate
  }
}

export function getTodayMissionFailure() {
  return {
    type: GET_TODAY_MISSION_FAILURE
  }
}

export function fetchTodayMission() {
  return dispatch => {
    // console.log('fetchTodayMission...')
    dispatch(getTodayMission())

    fetch(APIConfig.getTodayMission, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( response => {
      if (response.status === 201) {
        response.json().then( responseJSON => {
          dispatch(getTodayMissionSuccess(responseJSON, new Date()))
        })
      } else {
        dispatch(getTodayMissionFailure())
      }
    }).catch( err => {
      console.log(err)
      dispatch(getTodayMissionFailure())
    })
  }
}

//////////////////////////////////////////////////////////////////////////////

// push mission

export function requestNotification() {
  return {
    type: REQUEST_NOTIFICATION
  }
}

export function requestNotificationSuccess() {
  return {
    type: REQUEST_NOTIFICATION_SUCCESS
  }
}

export function requestNotificationFailure() {
  return {
    type: REQUEST_NOTIFICATION_FAILURE
  }
}

export function fetchNotificationRequest() {
  return dispatch => {
    console.log('fetchNotificationRequest...')
    dispatch(requestNotification())

    fetch(APIConfig.requestNotification, {
      method: 'GET'
    }).then( response => {
      if (response.status === 201) {
        dispatch(requestNotificationSuccess())
      } else {
        dispatch(requestNotificationFailure())
      }
    })
  }
}

export function getNotificationMission() {
  return {
    type: GET_NOTIFICATION_MISSION
  }
}

export function getNotificationMissionSuccess(mission, pushedDate, expireTime) {
  console.log('getNotificationMissionSuccess')
  console.log('mission: ', mission)

  return {
    type: GET_NOTIFICATION_MISSION_SUCCESS,
    mission,
    pushedDate,
    expireTime
  }
}

export function getNotificationMissionFailure() {
  return {
    type: GET_NOTIFICATION_MISSION_FAILURE
  }
}

export function fetchNotificationMission(notificationData) {
  return dispatch => {
    console.log('fetchNotificationMission...')
    dispatch(getNotificationMission())

    if (!notificationData) {
      console.log('ERROR: notificationData is missing')
      dispatch(getNotificationMissionFailure())
      return;
    }
    let mission = {
      leadText: notificationData.leadText,
      mission: {
        type: notificationData.missionType,
        text: notificationData.missionText,
      },
      benefit: {
        type: notificationData.benefitType,
        text: notificationData.benefitText
      },
      time: notificationData.time,
    }

    dispatch(getNotificationMissionSuccess(mission, notificationData.pushDate, 20000))
  }
}

//////////////////////////////////////////////////////////////////////////////

export function setMissionToShow(missionToShowType) {
  return {
    type: SET_MISSION_TO_SHOW_TYPE,
    missionToShowType
  }
}

// set mission to show
export function fetchMissionToShow(type) {

  return dispatch => {
    console.log('fetchMissionToShow')
    console.log('type: ')
    console.log(type)

    if (type !== missionToShowType.todayMission && type !== missionToShowType.pushMission) {
      console.log('ERROR: fetchMissionToShow type is wrong')
      return
    }
    dispatch(setMissionToShow(type))
  }
}
