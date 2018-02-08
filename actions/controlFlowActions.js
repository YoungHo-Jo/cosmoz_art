/* @flow */

import * as Constants from "../reducers/constants";

export function fetchDropDownListState(isShown) {
  const action = (_isShown) => {
    return {
      type: Constants.SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE,
      isShown: _isShown
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE}] show: ${isShown}`)
    dispatch(action(isShown))
  }
}

/* Set current view page num */
export function fetchCurrentViewPage(currentViewPage) {
  const action = (_currentViewPage) => {
    return {
      type: Constants.SET_CURRENT_VIEWPAGE,
      currentViewPage: _currentViewPage
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_CURRENT_VIEWPAGE}] currentViewPage: ${currentViewPage}`)
    dispatch(action(currentViewPage))
  }
}

/* Set current view page */
export function fetchCurrentPage(currentPage) {
  const action = (_currentPage) => {
    return {
      type: Constants.SET_CURRENT_PAGE,
      currentPage: _currentPage
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_CURRENT_PAGE}] currentPage: ${currentPage}`)
    dispatch(action(currentPage))
  }
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
  return dispatch => {
    console.debug(`[${Constants.SET_POPUP}] show: ${show} content: ${content ? 'not null' : 'null'}`)
    dispatch(action(show, content))
  }
}

/* Set left button visibility and what it does */

export function fetchTitleBarLeftBtn(leftBtnShow, leftBtnFunc) {
  const action = (_leftBtnShow, _leftBtnFunc) => {
    return {
      type: Constants.SET_TITLE_BAR_LEFT_BTN,
      leftBtnShow: _leftBtnShow,
      leftBtnFunc: _leftBtnFunc
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_TITLE_BAR_LEFT_BTN}] show: ${leftBtnShow}`)
    dispatch(action(leftBtnShow, leftBtnFunc))
  }
}

/* Set right button visibility and whit it does */
export function fetchTitleBarRightBtn(rightBtnShow, rightBtnFunc) {
  const action = (_rightBtnShow, _rightBtnFunc) => {
    return {
      type: Constants.SET_TITLE_BAR_RIGHT_BTN,
      rightBtnShow: _rightBtnShow,
      rightBtnFunc: _rightBtnFunc
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_TITLE_BAR_RIGHT_BTN}] show: ${rightBtnShow}`)
    dispatch(action(rightBtnShow, rightBtnFunc))
  }
}


/* Set modal content */
export function fetchModal(show, content?) {
  const action = (_show, _content) => {
    return {
      type: Constants.SET_MODAL,
      show: _show,
      content: _content
    }
  }
  return dispatch => {
    console.debug(`[${Constants.SET_MODAL}] show: ${show} content: ${content ? 'not null' : 'null'}`)
    dispatch(action(show, content))
  }
}
