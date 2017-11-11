import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as Reducer from './reducer.js'

let store=createStore(
    combineReducers(Reducer),
    applyMiddleware(thunk)
)
export default store
