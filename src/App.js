import React from 'react';
// import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import MenuPage from './Pages/MenuPage/MenuPage.js'
import SignInAndSignUp from './Pages/Signin&SignUp/Signin&Signup.js'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.js'

import Header from './Components/Header/Header.js'

import  {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils.js'

import {Switch,Route,Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {GlobalStyle} from './global.styles.js'

import { setCurrentUser } from './redux/User/user.actions.js'
import {selectCurrentUser} from './redux/User/user.selectors.js'
import {selectCollectionsForPreview} from './redux/Menu/menu.selectors.js'


class App extends React.Component {
	unsubscribeFromAuth=null // initialised as null

	componentDidMount(){
		const {setCurrentUser,menuCollection}=this.props;
		//reassigned to the return value of calling auth.onAuthStateChanged(),
		//this method returns another method: firebase.unsubscribe().
		this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
			if(userAuth) {
				const userRef= await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot=> {
					setCurrentUser({
						id:snapShot.id,
						...snapShot.data()	
					})
				});
			}
			else {
				setCurrentUser(userAuth)
			}
			addCollectionAndDocuments('collections',menuCollection.map(({title,items})=> ({title,items})));
			// console.log(user); //this is an open Subscription(Kind of like open messaging system bw app and firebase)
		})
		
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); 
		//unsubscribeFromAuth() is called inside the componentWillUnmount, it now has the value of firebase.unsubscribe(), 
		//which executes, closing the session.


	}

	render() {
		return (
		    <div>
		    <GlobalStyle/>
		    <Header/>
		    	<Switch>
				    <Route exact path='/' component={Homepage}/>
				    <Route path='/menu' component={MenuPage}/>
				    <Route exact path='/signIn' render={()=>this.props.currentUser?(<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
				    <Route exact path='/checkout' component={CheckoutPage}/>
			    </Switch>
		    </div>
  		);
	} 
}

const mapStateToProps=state=> ({
	currentUser:selectCurrentUser(state),
	menuCollection:selectCollectionsForPreview(state)
})

const mapDispatchToProps=dispatch=> ({
	setCurrentUser: user=> dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps,mapDispatchToProps)(App);
