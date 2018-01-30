/* @flow */

import * as Constants from "../reducers/constants";
import APIConfig from "../APIConfig";
import {sha256} from "react-native-sha256";
import firebase from "../firebase";
import JwtDecoder from 'jwt-decode'

export function login() {
  return {
    type: Constants.LOGIN
  }
}

export function getLoginSuccess(token, userPK, nickname, accumulationTime, userText, fcmToken) {
  return {
    type: Constants.LOGIN_SUCCESS,
    token,
    userPK,
    fcmToken,
    nickname,
    accumulationTime,
    userText
  }
}

export function getLoginFailure() {
  return {
    type: Constants.LOGIN_FAILURE
  }
}


export function fetchLogin(loginInfo, isPwEncrypted = false) {
  return dispatch => new Promise((resolve, reject) => {
    console.log('try login...')
    dispatch(login())
    if (!loginInfo) {
      console.log('loginInfo needed in fetchLogin')
      return reject()
    }
    if (loginInfo.id && loginInfo.pw) {
      const id = loginInfo.id

      sha256(loginInfo.pw).then((pw) => {
        if(isPwEncrypted) {
          pw = loginInfo.pw
        }
        var fcmToken = null
        console.log(`id: ${id} pw: ${pw}`)
        firebase.messaging().getToken().then(token => {
              fcmToken = token
              console.log('login... | FCM TOKEN: ' + token)
              fetch(APIConfig.login, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id: id,
                  pw: pw,
                  deviceToken: fcmToken
                })
              }).then(response => {
                if (response.status === 201) {
                  console.log('login succeed');
                  response.json().then((responseJSON) => {
                    // Decode jwtToken
                    const userData = JwtDecoder(responseJSON.token)
                    // Login Succeed
                    dispatch(getLoginSuccess(
                      responseJSON.token,
                      userData.pk,
                      userData.nickname,
                      userData.accumulation_time,
                      userData.user_text,
                      userData.fcm_token
                    ))
                  })
                  return resolve(pw)
                } else {
                  console.log('login failed');
                  dispatch(getLoginFailure())
                  return reject()
                }
              })
            }).catch((err) => console.log(err))
      })
    } else {
      console.log('login failed, either id or pw is missing');
      dispatch(getLoginFailure())
      return reject()
    }
  })
}

export function fetchLogout() {
  return dispatch => dispatch(() => {
    return {
      type: Constants.LOGOUT
    }
  })
}




/* For user that is doding a mission */
// Set whether the user is doing the mission or not
export function fetchIsMissionDoing(doing, missionPK) {
  const action = (_doing, _missionPK) => {
    return {
      type: Constants.SET_IS_MISSION_DOING,
      doing: _doing,
      missionPK: _missionPK
    }
  }
  return dispatch => dispatch(action(doing, missionPK))
}

// Save the image name for uploading for which mission done by the user
export function fetchMissionImageName(imageName) {
  const action = (_imageName) => {
    return {
      type: Constants.SET_MISSION_IMAGE_NAME,
      imageName: _imageName
    }
  }

  return dispatch => dispatch(action(imageName))
}

/* Set image url */
export function fetchMissionImageURI(imageURI) {
  const action = (_imageURI) => {
    return {
      type: Constants.SET_MISSION_IMAGE_URI,
      imageURI: _imageURI
    }
  }
  return dispatch => dispatch(action(imageURI))
}
