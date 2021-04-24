import React from 'react';
import MENU_DATA from './MenuData.js'
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview.js'

class MenuPage extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			collections:MENU_DATA
		}
	}
	render () {
		return (
			<div>
				{
					this.state.collections.map(collection => (
					<CollectionPreview key={collection.id} title={collection.title} 
					routeName={collection.routeName} items={collection.items}/> 
					))
				}
			</div>
			)
	}
}

export default MenuPage;