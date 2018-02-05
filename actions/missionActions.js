import APIConfig from "../APIConfig";
import * as Constants from "../reducers/constants";
import {missionToShowType} from "../reducers/missionDataReducer";
import * as Utills from '../Utills'

const EXPIRE_TIME = 20000

/* Get Today mission */
export function fetchTodayMission() {
  const getTodayMission = () => {
    return {
      type: Constants.GET_TODAY_MISSION
    }
  }

  const getTodayMissionSuccess = (_mission, _fetchedDate) => {
    console.log('Reducer: getTodayMissionSuccess')
    console.log('mission: ', _mission)
    console.log('fetchDate: ' + _fetchedDate)
    _mission = {
      ..._mission,
      time: Utills.getSecs(_mission.time)
    }
    return {
      type: Constants.GET_TODAY_MISSION_SUCCESS,
      mission: _mission,
      fetchedDate: _fetchedDate
    }
  }

  const getTodayMissionFailure = () => {
    return {
      type: Constants.GET_TODAY_MISSION_FAILURE
    }
  }

  return dispatch => {
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

/* Request Push Mission */
export function fetchNotificationRequest() {
  const requestNotification = () => {
    return {
      type: Constants.REQUEST_NOTIFICATION
    }
  }

  const requestNotificationSuccess = () => {
    return {
      type: Constants.REQUEST_NOTIFICATION_SUCCESS
    }
  }

  const requestNotificationFailure = () => {
    return {
      type: Constants.REQUEST_NOTIFICATION_FAILURE
    }
  }

  return dispatch => {
    console.debug('Fetch Notification Request')
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

/* Get Push mission */
export function fetchNotificationMission(notificationData) {
  const getNotificationMission = () => {
    return {
      type: Constants.GET_NOTIFICATION_MISSION
    }
  }

  const getNotificationMissionSuccess = (_mission, _pushedDate, _expireTime) => {
    console.log('getNotificationMissionSuccess')
    console.log('mission: ', mission)

    return {
      type: Constants.GET_NOTIFICATION_MISSION_SUCCESS,
      mission: _mission,
      pushedDate: _pushedDate,
      expireTime: _expireTime
    }
  }

  const getNotificationMissionFailure = () => {
    return {
      type: Constants.GET_NOTIFICATION_MISSION_FAILURE
    }
  }

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

    dispatch(getNotificationMissionSuccess(mission, notificationData.pushDate, EXPIRE_TIME))
  }
}

/* Set mission to show */
export function fetchMissionToShow(type) {

  const setMissionToShow = (_missionToShowType) => {
    return {
      type: Constants.SET_MISSION_TO_SHOW_TYPE,
      missionToShowType: _missionToShowType
    }
  }

  return dispatch => {
    console.log(`Fetch mission to show: ${type}`)

    if (type !== missionToShowType.todayMission && type !== missionToShowType.pushMission) {
      console.log('ERROR: fetchMissionToShow type is wrong')
      return
    }
    dispatch(setMissionToShow(type))
  }
}
