import React from 'react';
import MENU_DATA from './MenuData.js'
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview.js'
import SearchBox from '../../Components/SearchBox/SearchBox.js'

class MenuPage extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			collections:MENU_DATA,
			searchField:''
		}
	}

	onSearchChange= (event) => {
    this.setState({searchField:event.target.value})
	}

	render () {
		return (
			<div>
			
				{
					this.state.collections.map(collection => (
					<div>
						<SearchBox title={collection.title} searchChange={this.onSearchChange}/>
						<CollectionPreview key={collection.id} title={collection.title} 
						routeName={collection.routeName} items={collection.items}/> 
					</div>
					))
				}
			</div>
			)
	}
}

export default MenuPage;