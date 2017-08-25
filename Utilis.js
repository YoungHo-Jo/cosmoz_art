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