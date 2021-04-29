import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/meal2.svg';
import {auth} from '../../firebase/firebase.utils.js'
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon.js'
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.js'
import {selectCurrentUser} from '../../redux/User/user.selectors.js';
import {selectCartHidden} from '../../redux/cart/cart.selectors.js';
import {clearCart} from '../../redux/cart/cart.actions.js'

import {createStructuredSelector} from 'reselect';// using this there is no need to pass state to every selector in mapStateToProps


const Header=({currentUser,hidden,clearCart}) => {
	return (
		<div className='header'>
			<Link className='logo-container' to="/">
				<Logo className='logo' height="60px" width="60px"/>
				{/*<div class="hide">I am shown when someone hovers over the div above.</div>*/}
			</Link>
			<div className='app-name'><h1>FoodiZone</h1></div>
			<div className='options'>
				<Link className='option' to='/menu'>MENU</Link>
				<Link className='option' to='/menu'>CONTACT</Link>
				{
					currentUser ?
					 <div className='option' onClick={()=>{ auth.signOut(); clearCart()}}>SIGN OUT</div> 
					: <Link className='option' to='/signIn'>SIGN IN</Link> 
				}
				<CartIcon/>
			</div>
			{hidden ? null  : <CartDropdown/> }
			
		</div>
		)
}

const mapStateToProps =createStructuredSelector ({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden
})

const mapDispatchToProps=dispatch=> ({
	clearCart:()=>dispatch(clearCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);