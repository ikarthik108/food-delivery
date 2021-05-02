import {MenuActionTypes} from './menu.types.js'

export const updateCollections= (collectionsMap)=>({
		type:MenuActionTypes.UPDATE_COLLECTIONS,
		payload:collectionsMap
		
})