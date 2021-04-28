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

import {createStructuredSelector} from 'reselect';// using this there is no need to pass state to every selector in mapStateToProps


const Header=({currentUser,hidden}) => {
	return (
		<div className='header'>
			<Link className='logo-container' to="/">
				<Logo className='logo' height="60px" width="60px"/>
			</Link>
			<div className='options'>
				<Link className='option' to='/menu'>MENU</Link>
				<Link className='option' to='/menu'>CONTACT</Link>
				{
					currentUser ?
					 <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> 
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

export default connect(mapStateToProps)(Header);