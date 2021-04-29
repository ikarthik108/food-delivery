import {combineReducers} from 'redux';
import userReducer from './User/User-Reducer.js'
import cartReducer from './cart/cart-reducer.js'
import directoryReducer from './directory/directoryReducer.js'
import menuReducer from './Menu/MenuReducer.js'

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' //We get the local storage objects from our window browser;


//specifies from what point on out reducer object we want to store things;
const persistConfig= {
	key:'root',
	storage:storage,
	whitelist:['cart']
}

const rootReducer= combineReducers({
	user:userReducer,
	cart:cartReducer,
	directory:directoryReducer,
	menu:menuReducer
})


export default persistReducer(persistConfig,rootReducer);