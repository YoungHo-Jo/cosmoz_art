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
export function fetchPopup(show, content = null) {
  const action = (_show, _content) => {
    return {
      type: Constants.SET_POPUP,
      show: _show,
      content: _content
    }
  }
  return dispatch => dispatch(action(show, content))
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
