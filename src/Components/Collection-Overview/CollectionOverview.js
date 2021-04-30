import React from 'react';
import CollectionPreview from '../Collection-Preview/CollectionPreview.js'
import './CollectionOverview.scss'
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/Menu/menu.selectors.js'

const CollectionOverview=({collections})=> {
	return (
		<div className='collections-overview'>
		
		{collections.map(collection => (
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