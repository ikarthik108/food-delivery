import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectMenu=(state)=>(state.menu)

export const selectCollections= createSelector(
	[selectMenu],
	(menu)=>menu.collections
)


//This function explicity returns the same collection object but turns it into a dictionary(normalization) for improved performance
export const selectCollectionsForPreview= createSelector(
	[selectCollections],
	(collections)=>collections ? Object.keys(collections).map(key=>collections[key]): []
);

export const selectCollectionItem =memoize((collectionUrlParam) =>
	createSelector(
	[selectCollections],
	(collections)=>collections ? collections[collectionUrlParam]:null
	)
);

//memoizing the select collection item function as if the same urlparameter is passed we dont need to run the function again.
//Memoize does the same idea of memoization as reselect does for our selectors,
// except this time we're memoizing the return of our function which returns our selector:

