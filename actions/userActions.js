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
                    dispatch(getLoginSuccess(responseJSON.id_token, responseJSON.user_pk, fcmToken))
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
  return dispatch => dispatch((doing, missionPK) => {
    type: Constants.SET_IS_MISSION_DOING,
    doing,
    missionPK
  })
}

// Save the image name for uploading for which mission done by the user
export function fetchMissionImageName(imageName) {
  return dispatch => {
    dispatch(imageName => {
      return {
        type: Constants.SET_MISSION_IMAGE_URL,
        imageUrl
      }
    })
  }
}

/* Set image url */
export function fetchMissionImageUrl(imageUrl) {
  return dispatch => dispatch((imageUrl) => {
    return {
      type: Constants.SET_MISSION_IMAGE_URL,
      imageUrl
    }
  })
}
