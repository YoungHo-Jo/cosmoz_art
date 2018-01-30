
/* @flow */

import RNFirebase from 'react-native-firebase'
import {fetchNotificationMission} from "./actions/missionActions";

const configurationOptions = {
  debug: true
}

const firebase = RNFirebase.initializeApp(configurationOptions)

firebase.messaging().getInitialNotification()
    .then((notification) => {
      console.log('Notification which opened the app: ', notification);
    });


export const getRandomMission = (jwtToken) => {
  return fetch(APIConfig.requestNotification, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwtToken
    }
  }).then(response => {
    if (response.status === 201) {
      console.log('request notification succeed');
    } else {
      console.log('request notification failed');
    }
  })
}


export default firebase
