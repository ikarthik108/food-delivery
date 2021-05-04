import React from 'react';
import SearchBox from '../../Components/SearchBox/SearchBox.js'
import CollectionOverview from '../../Components/Collection-Overview/CollectionOverview.js'
import CollectionPage from '../Collection/Collection.js'
import {firestore} from '../../firebase/firebase.utils.js'
import {convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux';

import {Route} from 'react-router-dom';

import {updateCollections} from '../../redux/Menu/menu.actions.js'


//importing the customized HOC created

import WithSpinner from '../../Components/with-spinner/with-spinner.js'

const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class MenuPage extends React.Component {

	state = {
		loading:true,
		CategorySearchField:'',
		IngredientSearchField:''
	};


	unsubscribeFromSnapshot=null;
	componentDidMount() {
		const {updateCollections,currentUser}=this.props;
		const collectionRef=firestore.collection('collections'); //Getting collections from firestore
		collectionRef.onSnapshot(async snapShot=> {
			const collectionsMap=convertCollectionsSnapshotToMap(snapShot);
			updateCollections(collectionsMap)
			this.setState({loading:false})
		})

	}

	onSearchChange= (event) => {
	console.log('TITLE',event.target.title);
	if(event.target.title==='Category') {
		this.setState({CategorySearchField:event.target.value})
	} else {
		this.setState({IngredientSearchField:event.target.value})
	}
         
  }

	render () {
		const {match}=this.props;
		const {loading}=this.state;
		
		return (
			<div className='menu-page'>
				{/*<SearchBox title={'Category'} searchChange={this.onSearchChange}/>*/}
				<SearchBox title={'Menu'} searchChange={this.onSearchChange}/>
				<Route exact path={`${match.path}`} 
				render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} 
				CategorySearch={this.state.CategorySearchField} IngredientSearch={this.state.IngredientSearchField} {...props}/>}/>
				<Route path={`${match.path}/:collectionId`} 
				render={(props)=> <CollectionPageWithSpinner isLoading={loading} IngredientSearch={this.state.IngredientSearchField} {...props}/>}/>
			</div>
			)
	}
}

const mapDispatchToProps=dispatch=> ({
	updateCollections:collectionsMap=> dispatch(updateCollections(collectionsMap))
})



export default connect(null,mapDispatchToProps)(MenuPage);