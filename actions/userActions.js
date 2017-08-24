import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT} from "../reducers/constants";
import APIConfig from "../APIConfig";
import {sha256} from "react-native-sha256";
import firebase from "../firebase";

export function login() {
  return {
    type: LOGIN
  }
}

export function getLoginSuccess(token, userPK, fcmToken) {
  return {
    type: LOGIN_SUCCESS,
    token,
    userPK,
    fcmToken
  }
}

export function getLoginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}


export function fetchLogin(loginInfo) {
  return (dispatch) => {
    console.log('try login...')
    dispatch(login())
    if (!loginInfo) {
      console.log('loginInfo needed in fetchLogin')
      return;
    }
    if (loginInfo.id && loginInfo.pw) {
      const id = loginInfo.id

      sha256(loginInfo.pw).then((pw) => {
        var fcmToken = null
        console.log('id: ' + id)
        console.log('pw: ' + pw)
        firebase.messaging().getToken()
            .then(token => {
              console.log('Device FCM Token: ', token)
              fcmToken = token
            })
        console.log('try login to server...')
        fetch(APIConfig.login, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            pw: pw
          })
        }).then(response => {
          if (response.status === 201) {
            console.log('login succeed');
            response.json().then((responseJSON) => {
              dispatch(getLoginSuccess(responseJSON.id_token, responseJSON.user_pk, fcmToken))
            })
          } else {
            console.log('login failed');
            dispatch(getLoginFailure())
          }
        }).catch((err) => console.log(err))
      })
    } else {
      console.log('login failed, either id or pw is missing');
      dispatch(getLoginFailure())
    }
  }
}


//=============================================

export function getLogout() {
  return {
    type: LOGOUT,
  }
}

export function fetchLogout() {
  return (dispatch) => {
    dispatch(getLogout())
    console.log('logout succeed')
  }
}
