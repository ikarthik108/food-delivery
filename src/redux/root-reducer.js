import {combineReducers} from 'redux';
import userReducer from './User/User-Reducer.js'

export const rootReducer= combineReducers({
	user:userReducer
})