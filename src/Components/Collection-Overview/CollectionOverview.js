import React from 'react';
import CollectionPreview from '../Collection-Preview/CollectionPreview.js'
import './CollectionOverview.scss'
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/Menu/menu.selectors.js'

const CollectionOverview=({collections ,search})=> {
	console.log(collections);
	console.log('searchField=',search?search:' Empty')
	const filteredCollections=collections.filter(collection=> {return collection.title.toLowerCase().includes(search.toLowerCase())})
	console.log(filteredCollections);
	// const filteredItems= this.state.items.filter(item => {
 //      	return item.name.toLowerCase().includes(search.toLowerCase())
 //   		});
	return (
		<div className='collections-overview'>
		{filteredCollections.map(collection => (
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