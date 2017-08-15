import {SET_MY_PAGE_DROP_DOWN_LIST_SHOW_STATE} from "../reducers/constants";


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
