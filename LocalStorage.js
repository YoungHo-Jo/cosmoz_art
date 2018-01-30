/* @flow */

import {AsyncStorage} from 'react-native'

const AUTO_LOGIN = 'AUTO_LOGIN'
const SAVE_ID = 'SAVE_ID'
const ID = 'ID'
const PW = 'PW'

const F = 'F'
const T = 'T'
const initialValue = {
  autoLogin: F,
  saveId: F
}

export const isAutoLoginEnabled = () => AsyncStorage.getItem(AUTO_LOGIN).then(value => {
    if(value == null) {
      AsyncStorage.setItem(AUTO_LOGIN, initialValue.autoLogin)
      value = F
    }
    console.log('isAutoLoginEnabled: ' + value);
    return value === T ? true : false
})

export const isSaveIdEnabled = () => AsyncStorage.getItem(SAVE_ID).then(value => {
    if(value == null) {
      AsyncStorage.setItem(SAVE_ID, initialValue.autoLogin)
      value = F
    }
    console.log('isSaveIdEnabled: ' + value);
    return value === T ? true : false
})

export const setAutoLoginEnabled = (enabled) => AsyncStorage.setItem(AUTO_LOGIN, enabled ? T : F)

export const setSaveIdEnabled = (enabled) => {
  AsyncStorage.setItem(SAVE_ID, enabled ? T : F)
}

export const saveId = (id) => {
  return AsyncStorage.setItem(ID, id)
}

export const savePW = (pw) => {
  return AsyncStorage.setItem(PW, pw)
}

export const deleteId = () => {
  return AsyncStorage.setItem(ID, '')
}

export const deletePW = () => {
  return AsyncStorage.setItem(PW, '')
}

export const getId = () => AsyncStorage.getItem(ID).then(value => {
  console.log('from LocalStorage: id: ' + value);
  return value
})
export const getPW = () => AsyncStorage.getItem(PW).then(value => {
  console.log('from LocalStorage: pw: ' + value);
  return value
})
