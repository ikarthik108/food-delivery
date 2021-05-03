import React from 'react';
// import './Header.scss';
import './HeaderLogo.scss'
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

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './Header.styles.jsx'


const Header=({currentUser,hidden,clearCart}) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className='logo' height="50px" width="50px"/>
				{/*<div class="hide">I am shown when someone hovers over the div above.</div>*/}
			</LogoContainer>
			{/*<div className='app-name'><h1>FoodZone</h1></div>*/}
			<OptionsContainer>
				<OptionLink to='/menu'>MENU</OptionLink>
				<OptionLink to='/menu'>CONTACT</OptionLink>
				{
					currentUser ?
					 <OptionDiv onClick={()=>{ auth.signOut(); clearCart()}}>SIGN OUT</OptionDiv> 
					: <OptionLink to='/signIn'>SIGN IN</OptionLink> 
				}
				<CartIcon/>
			</OptionsContainer>
			{hidden ? null  : <CartDropdown/> }
			
		</HeaderContainer>
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