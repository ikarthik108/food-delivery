import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import {Switch,Route} from 'react-router-dom';
import MenuPage from './Pages/MenuPage/MenuPage.js'
import Header from './Components/Header/Header.js'
import SignInAndSignUp from './Pages/Signin&SignUp/Signin&Signup.js'
import  {auth} from './firebase/firebase.utils.js'
import {createUserProfileDocument} from './firebase/firebase.utils.js';

import {connect} from 'react-redux';
import { setCurrentUser } from './redux/User/user.actions.js'


const DosaVarietyPage=()=> {
	return (
		<div>
			<h1>You are on the Dosa Varieties Page</h1>
		</div>
		)
}

class App extends React.Component {
	unsubscribeFromAuth=null // initialised as null

	componentDidMount(){
		//reassigned to the return value of calling auth.onAuthStateChanged(),
		//this method returns another method: firebase.unsubscribe().
		this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
			if(userAuth) {
				const userRef= await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot=> {
					this.props.setCurrentUser({
						id:snapShot.id,
						...snapShot.data()	
					})
				});
			}
			else {
				this.props.setCurrentUser(userAuth)
			}
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
		    <div className="">
		    <Header/>
		    	<Switch>
				    <Route exact path='/' component={Homepage}/>
				    <Route path='/dosa' component={DosaVarietyPage}/>
				    <Route path='/menu' component={MenuPage}/>
				    <Route path='/signIn' component={SignInAndSignUp}/>
			    </Switch>
		    </div>
  		);
	} 
}

const mapDispatchToProps=dispatch=> ({
	setCurrentUser: user=> dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
