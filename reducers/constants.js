/* @flow */

/* User */
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE'

export const LOGOUT = 'LOGOUT'

export const SET_IS_MISSION_DOING = 'SET_MISSION_DOING'
export const SET_MISSION_IMAGE_NAME = 'SET_MISSION_IMAGE_NAME'
export const SET_MISSION_IMAGE_URI = 'SET_MISSION_IMAGE_URI'

export const GET_USER_ARTS = 'GET_USER_ARTS'
export const GET_USER_ARTS_SUCCESS = 'GET_USER_ARTS_SUCCESS'
export const GET_USER_ARTS_FAILURE = 'GET_UESR_ARTS_FAILURE'

export const SET_ARTS_NEED_UPDATE = 'SET_ARTS_NEED_UPDATE'

/* Art */
export const UPLOAD_ART = 'UPLOAD_ART'
export const UPLOAD_ART_SUCCESS = 'UPLOAD_ART_SUCCESS'
export const UPLOAD_ART_FAILURE = 'UPLOAD_ART_FAILURE'

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS'
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE'

/* Mission */
export const GET_TODAY_MISSION = 'GET_TODAY_MISSION'
export const GET_TODAY_MISSION_SUCCESS = 'GET_TODAY_MISSION_SUCCESS'
export const GET_TODAY_MISSION_FAILURE = 'GET_TODAY_MISSION_FAILURE'

export const GET_NOTIFICATION_MISSION = 'GET_NOTIFICATION_MISSION'
export const GET_NOTIFICATION_MISSION_SUCCESS = 'GET_NOTIFICATION_MISSION_SUCCESS'
export const GET_NOTIFICATION_MISSION_FAILURE = 'GET_NOTIFICATION_MISSION_FAILURE'

export const SET_MISSION_TO_SHOW_TYPE = 'SET_MISSION_TO_SHOW_TYPE'

export const UPLOAD_DONE_MISSION = 'UPLOAD_DONE_MISSION'
export const UPLOAD_DONE_MISSION_FAILURE = 'UPLOAD_DONE_MISSION_FAILURE'
export const UPLOAD_DONE_MISSION_SUCCESS = 'UPLOAD_DONE_MISSION_SUCCESS'

export const REQUEST_NOTIFICATION = 'REQUEST_NOTIFICATION'
export const REQUEST_NOTIFICATION_SUCCESS = 'REQUEST_NOTIFICATION_SUCCESS'
export const REQUEST_NOTIFICATION_FAILURE = 'REQUEST_NOTIFICATION_FAILURE'

/* Control flow */
export const SET_CURRENT_VIEWPAGE = 'SET_CURRENT_VIEWPAGE'
export const SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE = 'SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_POPUP = 'SET_POPUP'
export const SET_TITLE_BAR_LEFT_BTN = 'SET_TITLE_BAR_LEFT_BTN'
export const SET_TITLE_BAR_RIGHT_BTN = 'SET_TITLE_BAR_RIGHT_BTN'
export const SET_MODAL = 'SET_MODAL'

/* Pages */
export const PAGES = {
  main: 'MAIN_PAGE',
  leadText: 'LEAD_TEXT_PAGE',
  mainMission: 'MAIN_MISSION_PAGE',
  timer: 'TIMER_PAGE',
  cameraButton: 'CAMERA_BUTTON_PAGE',
  camera: 'CAMERA_PAGE',
  scan: 'SCAN_PAGE',
  share: 'SHARE_PAGE',
  detailShare: 'DETAIL_SHARE_PAGE',
  setting: 'SETTING_PAGE',
  login: 'LOGIN_PAGE',
  signUp: 'SIGN_UP_PAGE',
  intro: 'INTRO_PAGE',
  my: 'MY_PAGE'
}
