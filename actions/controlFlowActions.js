/* @flow */

import * as Constants from "../reducers/constants";


export function setDropDownListState(isShown) {
  return {
    type: Constants.SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE,
    isShown
  }
}

export function fetchDropDownListState(isShown) {
  return (dispatch) => {
    console.log('fetchDropDownListState ' + isShown)
    dispatch(setDropDownListState(isShown))
  }
}

/////

/* Set current view page num */
export function setCurrentViewPage(currentViewPage) {
  return {
    type: Constants.SET_CURRENT_VIEWPAGE,
    currentViewPage
  }
}

export function fetchCurrentViewPage(currentViewPage) {
  return (dispatch) => {
    dispatch(setCurrentViewPage(currentViewPage))
  }
}

/* Set current view page */
export function setCurrentPage(currentPage) {
  return {
    type: Constants.SET_CURRENT_PAGE,
    currentPage
  }
}
export function fetchCurrentPage(currentPage) {
  return dispatch =>
    dispatch(setCurrentPage(currentPage))
}


/* Set wheter showing popupdialog or not */
export function setPopupVisibility(visibility) {
  return {
    type: Constants.SET_POPUP_VISIBILITY,
    visibility
  }
}

export function fetchPopupVisibility(visibility) {
  return dispatch => {
    dispatch(setPopupVisibility(visibility))
  }
}

/* Set PopupMsgBox Content including dialogText, left Button function and right button fuction */
export function setPopupContent(dialogText, leftBtnFunc, rightBtnFunc) {
  return {
    type: Constants.SET_POPUP_CONTENT,
    dialogText,
    leftBtnFunc,
    rightBtnFunc
  }
}

export function fetchPopupContent(dialogText, leftBtnFunc, rightBtnFunc) {
  return dispatch => {
    dispatch(setPopupContent(dialogText, leftBtnFunc, rightBtnFunc))
  }
}

/* Set left button visibility and what it does */
export function setTitleBarLeftBtn(leftBtnShow, leftBtnFunc) {
  return {
    type: Constants.SET_TITLE_BAR_LEFT_BTN,
    leftBtnShow,
    leftBtnFunc
  }
}

export function fetchTitleBarLeftBtn(leftBtnShow, leftBtnFunc) {
  return dispatch => dispatch(setTitleBarLeftBtn(leftBtnShow, leftBtnFunc))
}

/* Set right button visibility and whit it does */
export function setTitleBarRightBtn(rightBtnShow, rightBtnFunc) {
  return {
    type: Constants.SET_TITLE_BAR_RIGHT_BTN,
    rightBtnShow,
    rightBtnFunc
  }
}

export function fetchTitleBarRightBtn(rightBtnShow, rightBtnFunc) {
  return dispatch => dispatch(setTitleBarRightBtn(rightBtnShow, rightBtnFunc))
}


/* Set modal content */
export function setModal(show, content?) {
  return {
    type: Constants.SET_MODAL,
    show,
    content
  }
}

export function fetchModal(show, content?) {
  return dispatch => dispatch(setModal(show, content))
}
