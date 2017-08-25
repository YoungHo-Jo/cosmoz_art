import {SET_CURRENT_VIEWPAGE, SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE} from "../reducers/constants";


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

export function setCurrentViewPage(currentViewPage) {
  return {
    type: SET_CURRENT_VIEWPAGE,
    currentViewPage
  }
}

export function fetchCurrentViewPage(currentViewPage) {
  return (dispatch) => {
    console.log('hi')
    dispatch(setCurrentViewPage(currentViewPage))
  }
}
