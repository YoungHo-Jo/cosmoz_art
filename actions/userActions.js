/* @flow */

import * as Constants from "../reducers/constants";
import APIConfig, {ResponseCode} from "../APIConfig";
import {sha256} from "react-native-sha256";
import firebase from "../firebase";
import JwtDecoder from 'jwt-decode'

export function fetchLogin(loginInfo, isPwEncrypted = false) {
  const login = () => {
    return {
      type: Constants.LOGIN
    }
  }

  const loginSuccess = (_token, _userPK, _nickname, _fcmToken) => {
    return {
      type: Constants.LOGIN_SUCCESS,
      token: _token,
      userPK: _userPK,
      fcmToken: _fcmToken,
      nickname: _nickname,
    }
  }

  const loginFailure = () => {
    return {
      type: Constants.LOGIN_FAILURE
    }
  }

  return dispatch => new Promise((resolve, reject) => {
    const TAG = '[LOGIN]'
    dispatch(login())
    if (!loginInfo) {
      console.debug(`${TAG} loginIno invalid; ${loginInfo}`)
      return reject()
    }
    if (loginInfo.id && loginInfo.pw) {
      const id = loginInfo.id

      sha256(loginInfo.pw).then((pw) => {
        if (isPwEncrypted) {
          pw = loginInfo.pw
        }
        var fcmToken = null
        console.debug(`${TAG} id: ${id} pw: ${pw}`)
        firebase.messaging().getToken().then(token => {
          fcmToken = token
          console.debug(`${TAG} Login to server | FCM token: ${token}`)
          fetch(APIConfig.login, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, pw: pw, deviceToken: fcmToken})
          }).then(response => {
            if (response.status === ResponseCode.postOk) {
              console.debug(`${TAG} Success`)
              response.json().then((responseJSON) => {
                // Decode jwtToken
                const userData = JwtDecoder(responseJSON.token)
                // Login Succeed
                dispatch(loginSuccess(responseJSON.token, userData.pk, userData.nickname, userData.fcm_token))
              }).catch(err => {
                console.debug(`${TAG} Error; json parsing`)
                console.debug(err)
                dispatch(loginFailure())
              })
              return resolve(pw)
            } else {
              console.debug(`${TAG} Failure; response code; ${response.status}`)
              dispatch(loginFailure())
              return reject()
            }
          })
        }).catch(err => {
          console.debug(`${TAG} Error; fetch`)
          dispatch(loginFailure())
        })
      })
    } else {
      console.debug(`${TAG} Failure; id or pw missing`)
      dispatch(loginFailure())
      return reject()
    }
  })
}

export function fetchUserTimeText() {
  const fetching = () => {
    return {
      type: Constants.GET_USER_TIME_TEXT
    }
  }

  const success = (_time, _text) => {
    return {
      type: Constants.GET_USER_TIME_TEXT_SUCCESS,
      time: _time,
      text: _text
    }
  }

  const failure = () => {
    return {
      type: Constants.GET_USER_TIME_TEXT_FAILURE,
    }
  }

  return (dispatch, getState) => {
    const TAG = `[${Constants.GET_USER_TIME_TEXT}]`
    console.debug(`${TAG} Fetching start`)
    dispatch(fetching())

    const {userData} = getState()

    if(userData.token) {
        fetch(`${APIConfig.getTimeText}${userData.userPK}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userData.token}`
          }
        }).then(res => {
          if(res.status === ResponseCode.getOk) {
            res.json().then(json => {
              console.debug(`${TAG} Success`)
              console.debug(json)
              dispatch(success(json.time, json.text))
            }).catch(err => {
              console.debug(`${TAG} Failure; json parsing; ${err}`)
              dispatch(failure())
            })

          } else {
            console.debug(`${TAG} Failure; response code; ${res.status}`)
            dispatch(failure())
          }
        })
    } else {
      console.debug(`${TAG} Failure; no token`)
      dispatch(failure())
    }
  }
}

/* Logout */
export function fetchLogout() {
  const action = () => {
    return {
      type: Constants.LOGOUT
    }
  }
  return dispatch => {
    console.debug(`${Constants.LOGOUT}`)
    dispatch(action())
  }
}

/* For user that is doding a mission */
// Set whether the user is doing the mission or not
export function fetchIsMissionDoing(doing, missionPK = null) {
  const action = (_doing, _missionPK) => {
    return {type: Constants.SET_IS_MISSION_DOING, doing: _doing, missionPK: _missionPK}
  }
  return dispatch => {
    console.debug(`${Constants.SET_IS_MISSION_DOING} doing: ${doing} missionPK: ${missionPK}`)
    dispatch(action(doing, missionPK))
  }
}

// Save the image name for uploading for which mission done by the user
export function fetchMissionImageName(imageName) {
  const action = (_imageName) => {
    return {type: Constants.SET_MISSION_IMAGE_NAME, imageName: _imageName}
  }

  return dispatch => {
    console.debug(`${Constants.SET_MISSION_IMAGE_NAME} name: ${imageName}`)
    dispatch(action(imageName))
  }
}

/* Set image url */
export function fetchMissionImageURI(imageURI) {
  const action = (_imageURI) => {
    return {type: Constants.SET_MISSION_IMAGE_URI, imageURI: _imageURI}
  }
  return dispatch => {
    console.debug(`${Constants.SET_MISSION_IMAGE_URI} uri: ${imageURI}`)
    dispatch(action(imageURI))
  }
}

export function fetchDonMissionTime(time) {
  const action = (_time) => {
    return {
      type: Constants.SET_DONE_MISSION_TIME,
      time: _time
    }
  }
  return dispatch => {
    console.debug(`[SET_DONE_MISSION_TIME] time: ${time}`)
    dispatch(action(time))
  }
}

/* Get a user's arts */
export function fetchUserArts() {
  const getUserArts = () => {
    return {type: Constants.GET_USER_ARTS}
  }

  const getUserArtsSuccess = (_arts) => {
    return {type: Constants.GET_USER_ARTS_SUCCESS, arts: _arts}
  }

  const getUserArtsFailed = () => {
    return {type: Constants.GET_USER_ARTS_FAILURE}
  }
  return (dispatch, getState) => {
    const TAG = '[GET_USER_ARTS]'
    console.debug(`${TAG} Fetching start`)
    dispatch(getUserArts())
    const {userData} = getState()

    const request = fetch(APIConfig.getArtsOfUser + userData.userPK, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userData.token
      }
    })

    return request.then(response => {
      if (response.status == ResponseCode.getOk) {
        // Success
        console.debug(`${TAG} Success`)
        response.json().then(arts => {
          console.debug(arts)
          dispatch(getUserArtsSuccess(arts))
        }).catch(err => {
          console.debug(`${TAG} Error; json parsing`)
          dispatch(getUserArtsFailed())
        })
      } else {
        // Fail

        console.debug(`${TAG} Failure; response code; ${response.status}`)
        dispatch(getUserArtsFailed())
      }
    }).catch((err) => {
      console.debug(`${TAG} Failure; fetch`)
      console.debug(err)
    })
  }
}

/* Set true or false that arts need update */
export function fetchArtsNeedUpdate(artsNeedUpdate) {
  const action = (_artsNeedUpdate) => {
    return {
      type: Constants.SET_ARTS_NEED_UPDATE,
      artsNeedUpdate: _artsNeedUpdate
    }
  }
  return (dispatch) => {
    console.debug(`[${Constants.SET_ARTS_NEED_UPDATE}] update: ${artsNeedUpdate}`)
    dispatch(action(artsNeedUpdate))
  }
}

/* Get a user's doen mission */
export function fetchUserDoneMissions() {
  const fetching = () => {
    return {
      type: Constants.GET_USER_DONE_MISSIONS
    }
  }

  const success = (_doneMissions) => {
    return {
      type: Constants.GET_USER_DONE_MISSIONS_SUCCESS,
      doneMissions: _doneMissions
    }
  }

  const failure = () => {
    return {
      type: Constants.GET_USER_DONE_MISSIONS_FAILURE
    }
  }

  return (dispatch, getState) => {
    const TAG = '[GET_USER_DONE_MISSIONS]'
    console.debug(`${TAG} Fetching start`)
    dispatch(fetching())

    const {userData} = getState()

    if(userData.userPK && userData.token) {
      fetch(`${APIConfig.getDoneMissions}${userData.userPK}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + userData.token
        }
      }).then(response => {
        if(response.status === ResponseCode.getOk) {
          response.json().then(json => {
            console.debug(`${TAG} Success`)
            console.debug(json)
            dispatch(success(json))
          }).catch(err => {
            console.debug(`${TAG} Failure; json parsing`)
            dispatch(failure())
          })
        } else {
          console.debug(`${TAG} Failure; response code; ${response.status}`)
          dispatch(failure())
        }
      })
    } else {
      console.debug(`${TAG} Error; no userPK or token`)
      dispatch(failure())
    }
  }
}
