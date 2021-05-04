import React from 'react';
import './Collection.scss'
import {selectCollectionItem} from '../../redux/Menu/menu.selectors.js'

import CollectionItem from '../../Components/Collection-Item/CollectionItem.js';

import {connect} from 'react-redux'

const CollectionPage=({match,collection,IngredientSearch})=> {
	console.log(collection)	
	const filteredItems=collection.items.filter(item=>{return item.name.toLowerCase().includes(IngredientSearch.toLowerCase())})
	console.log('y=',filteredItems)
	// const filteredItems=collections.map(collection=> (
	// 	{
	// 		title:collection.title,
	// 		id:collection.id,
	// 		routeName:collection.routeName,
	// 		items:collection.items.filter(item=>{return item.name.toLowerCase().includes(IngredientSearch.toLowerCase())})
	// 	}
	// ))
	return (
		<div className='collection-page'>
			<h2 className='title'>{collection.title.toUpperCase()}</h2>
			<div className='items'>
				{filteredItems.map(item => (
					<CollectionItem key={item.id} item={item}/>	
					))}

			</div>
		</div>
		)
}

const mapStateToProps=(state,ownProps)=> ({
	collection:selectCollectionItem(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);