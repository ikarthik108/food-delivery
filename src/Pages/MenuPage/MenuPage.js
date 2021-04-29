import React from 'react';
import SearchBox from '../../Components/SearchBox/SearchBox.js'
import CollectionOverview from '../../Components/Collection-Overview/CollectionOverview.js'
import CollectionPage from '../Collection/Collection.js'

import {Route} from 'react-router-dom';

const MenuPage=({match})=>{
		return (
			<div className='menu-page'>
				<Route exact path={`${match.path}`} component={CollectionOverview}/>
				<Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
			</div>
			)
}

export default MenuPage;