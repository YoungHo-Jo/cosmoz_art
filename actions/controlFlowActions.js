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
