import APIConfig, {ResponseCode} from "../APIConfig";
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
    const TAG = '[GET_TODAY_MISSION]'
    console.debug(`${TAG} Fetching start`)
    dispatch(getTodayMission())

    fetch(APIConfig.getTodayMission, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( response => {
      if (response.status === ResponseCode.getOk) {
        response.json().then( json => {
          console.debug(`${TAG} Success`)
          const mission = {
            missionPK: json.pk,
            leadText: json.lead_text,
            mission: {
              type: json.type,
              text: json.mission_text
            },
            benefit: {
              type: null,
              text: null
            },
            time: Utills.getSecs(json.time)
          }
          console.debug(mission)
          dispatch(getTodayMissionSuccess(mission, new Date()))
        })
      } else {
        console.debug(`${TAG} Failure; response code; ${response.code}`)
        dispatch(getTodayMissionFailure())
      }
    }).catch( err => {
      console.debug(`${TAG} Error; fetch`)
      console.debug(err)
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
      if (response.status === ResponseCode.getOk) {
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

/* Get mission types */
export function fetchMissionTypes() {
  const fetching = () => {
    return {
        type: Constants.GET_MISSION_TYPES
    }
  }

  const success = (_missionTypes) => {
    return {
      type: Constants.GET_MISSION_TYPES_SUCCESS,
      missionTypes: _missionTypes
    }
  }

  const failure = () => {
    return {
        type: Constants.GET_MISSION_TYPES_FAILURE
    }
  }

  return dispatch => {
    const TAG = '[GET_MISSION_TYPES]'
    console.debug(`${TAG} Fetching start`)
    dispatch(fetching())

    fetch(APIConfig.getMissionTypes, {
      method: 'GET'
    }).then(response => {
      if(response.status === ResponseCode.getOk) {
        response.json().then(json => {
          console.debug(`${TAG} Success`)
          console.debug(json)
          dispatch(success(json))
        }).catch(() => {
          console.debug(`${TAG} Failure; json`)
          dispatch(failure())
        })
      } else {
        console.debug(`${TAG} Failure; response code; ${response.status}`)
        dispatch(failure())
      }
    }).catch(err => {
      console.debug(`${TAG} Failure; fetching error`)
      console.debug(err)
      dispatch(failure())
    })
  }
}

/* Get benefit types */
export function fetchBenefitTypes() {
  const fetching = () => {
    return {
      type: Constants.GET_BENEFIT_TYPES
    }
  }

  const success = (_benefitTypes) => {
    return {
      type: Constants.GET_BENEFIT_TYPES_SUCCESS,
      benefitTypes: _benefitTypes
    }
  }

  const failure = () => {
    return {
      type: Constants.GET_BENEFIT_TYPES_FAILURE
    }
  }

  return dispatch => {
    const TAG = '[GET_BENEFIT_TYPES]'
    console.debug(`${TAG} Fetching start`)
    dispatch(fetching())

    fetch(APIConfig.getBenefitTypes, {
      method: 'GET'
    }).then(response => {
      if(response.status === ResponseCode.getOk) {
        response.json().then(json => {
          console.debug(`${TAG} Success`)
          console.debug(json)
          dispatch(success(json))
        }).catch(err => {
          console.debug(`${TAG} Failure; json`)
          console.debug(err)
          dispatch(failure())
        })
      } else {
        console.debug(`${TAG} Failure; response code; ${response.status}`)
        dispatch(failure())
      }
    }).catch(err => {
      console.debug(`${TAG} Failure; fetching error`)
      console.debug(err)
      dispatch(failure())
    })
  }
}
