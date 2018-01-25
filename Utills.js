/* @flow */
import {Platform, ToastAndroid, AlertIOS, Dimensions, Vibration  }from "react-native";

const VIB_PATTERN = Platform.select({
    ios: [
      500,
      500
    ],
    android: [
      500,
      500,
      500,
      500
    ]
})

export function vibrateForTimeUp() {
  Vibration.vibrate(VIB_PATTERN)
}

export function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}

export function getOS() {
  if (Platform.OS === 'ios') {
    return 'ios'
  } else {
    return 'android'
  }
}

export function getWindowSize() {
  return {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
}

export function getSecs(colonTime: string){
  const timeArr = colonTime.split(':')
  return (parseInt(timeArr[0]) * 60) + (parseInt(timeArr[1]))
}
