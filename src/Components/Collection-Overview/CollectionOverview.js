import React from 'react';
import CollectionPreview from '../Collection-Preview/CollectionPreview.js'
import './CollectionOverview.scss'
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/Menu/menu.selectors.js'

const CollectionOverview=({collections,CategorySearch,IngredientSearch})=> {
	console.log(collections);
	console.log('searchField=',CategorySearch?CategorySearch:' Empty')
	const filteredCollections=collections.filter(collection=> {return collection.title.toLowerCase().includes(CategorySearch.toLowerCase())})
	console.log('categoryfiltering',filteredCollections);

	const filteredItems=collections.map(collection=> (
		{
			title:collection.title,
			id:collection.id,
			routeName:collection.routeName,
			items:collection.items.filter(item=>{return item.name.toLowerCase().includes(IngredientSearch.toLowerCase())})
		}
	))
	console.log('filteredItems=',filteredItems);

	const final=filteredItems.filter(item => item.items.length > 0 );
	console.log(final)

	// const filteredItems=collections.map((collection)=> (
	// 	collection.items.filter(item=> {return item.name.toLowerCase().includes(IngredientSearch.toLowerCase())})))
	// console.log('filteredItems',filteredItems)
	// const newFiltered=filteredItems.filter(item=> item.length!==0)
	// console.log('final',newFiltered);
	return (
		<div className='collections-overview'>
		{final.map(collection => (
				<CollectionPreview key={collection.id} title={collection.title} 
				routeName={collection.routeName} items={collection.items}/> 
					))
		}
		</div>	
	)
}

const mapStateToProps=(state)=> ({
	collections:selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);