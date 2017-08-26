import {Platform, ToastAndroid, AlertIOS, Dimensions  }from "react-native";




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


export function getMilliSecs(timeString) {
  // timeString:: 'mm:ss'

  let dummy = {
    origin: timeString,
    min: 0,
    sec: 0,
    milli: 0,
  }
  if (timeString==='') {
    console.log('ERROR: timeString is empty')
    return dummy
  }

  if (!timeString.includes(':')) {
    console.log('ERROR: timeString is incorrect')
    return dummy
  }

  let arrayOfTimeString = timeString.split(':')
  if (arrayOfTimeString.length === 2) {
    console.log('ERROR: timeString has too many \':\'')
    return dummy
  }

  let m =  arrayOfTimeString[0],
      s = arrayOfTimeString[1]

  return {
    origin: timeString,
    min: m,
    sec: s,
    milli: (60 * m + s) * 60
  }




}