import {combineReducers} from 'redux';
import userReducer from './User/User-Reducer.js'
import cartReducer from './cart/cart-reducer.js'

export const rootReducer= combineReducers({
	user:userReducer,
	cart:cartReducer
})