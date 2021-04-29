import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectMenu=(state)=>(state.menu)

export const selectCollections= createSelector(
	[selectMenu],
	(menu)=>menu.collections
)

export const selectCollectionsForPreview= createSelector(
	[selectCollections],
	(collections)=>Object.keys(collections).map(key=>collections[key])
);

export const selectCollectionItem =memoize((collectionUrlParam) =>
	createSelector(
	[selectCollections],
	(collections)=>collections[collectionUrlParam]
	)
);

//memoizing the select collection item function as if the same urlparameter is passed we dont need to run the function again.
//Memoize does the same idea of memoization as reselect does for our selectors,
// except this time we're memoizing the return of our function which returns our selector:

