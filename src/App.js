import React from 'react';
// import './App.css';
import Homepage from './Pages/Homepage/Homepage.js'
import MenuPage from './Pages/MenuPage/MenuPage.js'
import SignInAndSignUp from './Pages/Signin&SignUp/Signin&Signup.js'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.js'
import ContactPage from './Pages/ContactPage/ContactPage.js'

import Header from './Components/Header/Header.js'

import  {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

import {Switch,Route,Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {GlobalStyle} from './global.styles.js'

import { setCurrentUser } from './redux/User/user.actions.js'
import {selectCurrentUser} from './redux/User/user.selectors.js'
import {addItem,clearCart} from './redux/cart/cart.actions.js'
import background from './assets/app-background.jpg'
import customBg from './assets/custom-bg.png'



class App extends React.Component {
	unsubscribeFromAuth=null // initialised as null

	componentDidMount(){
		const {setCurrentUser,currentUser}=this.props;
		//reassigned to the return value of calling auth.onAuthStateChanged(),
		//this method returns another method: firebase.unsubscribe().
		this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
			if(userAuth) {
				const userRef= await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot=> {
					console.log(snapShot.data())
					setCurrentUser({
						id:snapShot.id,
						...snapShot.data()	
					})
				});
				console.log(currentUser)
			}
			else {
				setCurrentUser(userAuth)
			}
			 //this is an open Subscription(Kind of like open messaging system bw app and firebase)
		})
		
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); 
		//unsubscribeFromAuth() is called inside the componentWillUnmount, it now has the value of firebase.unsubscribe(), 
		//which executes, closing the session.

	}

	render() {
		// const user=this.props.currentUser;
		// const cartItems=user.cartItems
		const {addItem,clearCart}=this.props
		return (
		    <div>
		    <GlobalStyle/>
		    <Header/>
		    	<Switch>
				    <Route exact path='/' component={Homepage}/>
				    <Route path='/menu' component={MenuPage}/>
				    <Route path='/contact' component={ContactPage}/>
				    <Route exact path='/signIn' 
				    render={()=>this.props.currentUser?(
				    	clearCart(),
				    	this.props.currentUser.cartItems
				    	.forEach(item=>{let counter=0;while(counter<item.quantity){addItem(item);counter++}}),
				    	<Redirect to='/'/>) 
				    : (<SignInAndSignUp/>)}/>
				    <Route exact path='/checkout' component={CheckoutPage}/>
			    </Switch>
		    </div>
  		);
	} 
}

const mapStateToProps=state=> ({
	currentUser:selectCurrentUser(state)
	
})

const mapDispatchToProps=dispatch=> ({
	setCurrentUser: user=> dispatch(setCurrentUser(user)),	
	addItem:item=>dispatch(addItem(item)),
	clearCart:()=>dispatch(clearCart())
})


	



export default connect(mapStateToProps,mapDispatchToProps)(App);
