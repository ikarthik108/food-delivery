import MENU_DATA from '../../Pages/MenuPage/MenuData.js'

const INITIAL_STATE= {
	collections:MENU_DATA,
	searchField:''
}

const menuReducer=(state=INITIAL_STATE,action)=> {
	switch(action.type) {
		default:
			return state
	}
}

export default menuReducer;