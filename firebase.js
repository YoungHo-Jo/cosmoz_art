
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



export default firebase
