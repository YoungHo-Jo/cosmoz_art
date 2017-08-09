


import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS} from "../reducers/constants";
import APIConfig from "../APIConfig";

export function login() {
  return {
    type: LOGIN
  }
}

export function getLoginSuccess(token, userPK) {
  return {
    type: LOGIN_SUCCESS,
    token,
    userPK,
  }
}

export function getLoginFailure() {
  return {
    type: LOGIN_FAILURE
  }
}


export function fetchLogin(loginInfo) {
  return (dispatch) => {
    dispatch(login())

    if(!loginInfo) {
      console.log('loginInfo needed in fetchLogin')
      return;
    }
    console.log('in fetchLogin')
    console.log(loginInfo.id)
    console.log(loginInfo.pw)
    if (loginInfo.id && loginInfo.pw) {
      fetch(APIConfig.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: loginInfo.id,
          pw: loginInfo.pw
        })
      })
          .then(response => {
            if (response.status === 201) {
              console.log('login succeed');

              const responseJSON = response.json()
                  .then(() => {
                    dispatch(getLoginSuccess(responseJSON.id_token, responseJSON.user_pk))
                  })
            } else {
              console.log('login failed');
              dispatch(getLoginFailure())
            }
          })
          .catch((err) => console.log(err))
    }

  }
}
