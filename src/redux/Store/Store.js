import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';//middleware that logs out 
import rootReducer from '../root-reducer.js'
import {persistStore} from 'redux-persist'; //Allows browser to cache our store depending on certain config options

const middlewares= [];

if(process.env.NODE_ENV==='development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor=persistStore(store); //Persisted Version Of our store

//Using store and persistor we will create our new provider wrapping out application. 

