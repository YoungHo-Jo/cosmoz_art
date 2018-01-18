import {SET_CURRENT_VIEWPAGE, SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE, SET_CURRENT_PAGE} from "../reducers/constants";


export function setDropDownListState(isShown) {
  return {
    type: SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE,
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
    type: SET_CURRENT_VIEWPAGE,
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
    type: SET_CURRENT_PAGE,
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
    type: SET_POPUP_VISIBILITY,
    visibility
  }
}

export function fetchPopupVisibility(visibility) {
  return dispatch => {
    dispatch(setPopupVisibility(visibility))
  }
}
