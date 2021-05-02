// import MENU_DATA from '../../Pages/MenuPage/MenuData.js'

import {MenuActionTypes} from './menu.types.js'

const INITIAL_STATE= {
	collections:null,
	searchField:''
}

const menuReducer=(state=INITIAL_STATE,action)=> {
	switch(action.type) {
		case MenuActionTypes.UPDATE_COLLECTIONS:
		return {
			...state,
			collections:action.payload
			}
		
		default:
			return state
	}
}

export default menuReducer;