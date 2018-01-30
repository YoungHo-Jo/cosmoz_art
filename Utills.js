/* @flow */
import {Platform, ToastAndroid, AlertIOS, Dimensions, Vibration  }from "react-native";

const CHAR_SET = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

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

export function makeNameRadonmly() {
  const charSetNum = CHAR_SET.length
  const NAME_LENGTH = 30
  var name = ''
  for(var i = 0; i < NAME_LENGTH; i++) {
    let randomNum = Math.floor(Math.random() * charSetNum)
    name = name + CHAR_SET[randomNum]
  }
  return name
}
