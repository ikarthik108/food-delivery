import React from 'react';
import './Collection.scss'
import {selectCollectionItem} from '../../redux/Menu/menu.selectors.js'

import CollectionItem from '../../Components/Collection-Item/CollectionItem.js';

import {connect} from 'react-redux'

const CollectionPage=({match,collection})=> {
	console.log(collection)	
	return (
		<div className='collection-page'>
			<h2 className='title'>{collection.title.toUpperCase()}</h2>
			<div className='items'>
				{collection.items.map(item => (
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