

import app from './reducers'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk))
  return store
}