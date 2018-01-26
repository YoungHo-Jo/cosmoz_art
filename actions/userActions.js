/* @flow */

import * as Constants from "../reducers/constants";
import APIConfig from "../APIConfig";
import {sha256} from "react-native-sha256";
import firebase from "../firebase";

export function login() {
  return {
    type: Constants.LOGIN
  }
}

export function getLoginSuccess(token, userPK, fcmToken) {
  return {
    type: Constants.LOGIN_SUCCESS,
    token,
    userPK,
    fcmToken
  }
}

export function getLoginFailure() {
  return {
    type: Constants.LOGIN_FAILURE
  }
}


export function fetchLogin(loginInfo) {
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
        var fcmToken = null
        console.log(`id: ${id} pw: ${pw}`)
        firebase.messaging().getToken()
            .then(token => {
              console.log(`Device FCM Token:  ${token}`)
              fcmToken = token
              console.log('try login to server...')
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
                    dispatch(getLoginSuccess(responseJSON.id_token, responseJSON.user_pk, fcmToken))
                  })
                  return resolve()
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


//=============================================

export function getLogout() {
  return {
    type: Constants.LOGOUT,
  }
}

export function fetchLogout() {
  return (dispatch) => {
    dispatch(getLogout())
    console.log('logout succeed')
  }
}


/* For user that is doding a mission */
// Set whether the user is doing the mission or not
export function setIsMissionDoing(doing) {
  return {
    type: Constants.SET_IS_MISSION_DOING,
    doing
  }
}

export function fetchIsMissionDoing(doing) {
  return dispatch => {
    dispatch(setIsMissionDoing(doing))
  }
}

// Save the image name for uploading for which mission done by the user
export function setMissionImageName(imageName) {
  return {
    type: Constants.SET_MISSION_IMAGE_NAME,
    imageName
  }
}

export function fetchMissionImageName(imageName) {
  return dispatch => {
    dispatch(setMissionImageName(imageName))
  }
}

/* Set image url */
export function setMissionImageUrl(imageUrl) {
  return {
    type: Constants.SET_MISSION_IMAGE_URL,
    imageUrl
  }
}

export function fetchMissionImageUrl(imageUrl) {
  return dispatch => dispatch(setMissionImageUrl(imageUrl))
}
