/* @flow */

import * as Constants from '../reducers/constants'
import APIConfig, {ResponseCode} from '../APIConfig'

/* Get today arts */
export function fetchTodayArts() {
  const fetching = () => {
    return {
      type: Constants.GET_TODAY_ARTS
    }
  }

  const success = (_missionPK, _arts, _keywords) => {
    return {
      type: Constants.GET_TODAY_ARTS_SUCCESS,
      missionPK: _missionPK,
      arts: _arts,
      keywords: _keywords
    }
  }

  const failure = () => {
    return {
      type: Constants.GET_TODAY_ARTS_FAILURE
    }
  }

  return dispatch => {
    const TAG = '[GET_TODAY_ARTS]'
    console.debug(`${TAG} Fetching start`)
    dispatch(fetching)

    fetch(APIConfig.getTodayArts, {
      method: 'GET'
    }).then(res => {
      if(res.status === ResponseCode.getOk) {
        res.json().then(json => {
          console.debug(`${TAG} Success`)
          console.debug(json)
          dispatch(success(json.mission_pk, json.arts, json.keywords))
        }).catch(err => {
          console.debug(`${TAG} Failure; json parsing`)
          dispatch(failure())
        })
      } else {
        console.debug(`${TAG} Failure; response code`)
        dispatch(failure())
      }
    })
  }
}
