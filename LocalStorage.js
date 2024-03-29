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

const TAG = 'LOCAL_STORAGE'

export const isAutoLoginEnabled = () => AsyncStorage.getItem(AUTO_LOGIN).then(value => {
    if(value == null) {
      AsyncStorage.setItem(AUTO_LOGIN, initialValue.autoLogin)
      value = F
    }
    console.debug(`${TAG} isAutoLoginEnabled: ${value}`)
    return value === T ? true : false
})

export const isSaveIdEnabled = () => AsyncStorage.getItem(SAVE_ID).then(value => {
    if(value == null) {
      AsyncStorage.setItem(SAVE_ID, initialValue.autoLogin)
      value = F
    }
    console.debug(`${TAG} isSaveIdEnabled: ${value}`)
    return value === T ? true : false
})

export const setAutoLoginEnabled = (enabled) => {
  console.debug(`${TAG} Set auto login; ${enabled}`)
  return AsyncStorage.setItem(AUTO_LOGIN, enabled ? T : F)
}

export const setSaveIdEnabled = (enabled) => {
  console.debug(`${TAG} Set save id; ${enabled}`)
  return AsyncStorage.setItem(SAVE_ID, enabled ? T : F)
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
  console.debug(`${TAG} id: ${value}`)
  return value
})
export const getPW = () => AsyncStorage.getItem(PW).then(value => {
  console.debug(`${TAG} pw: ${value}`)
  return value
})
