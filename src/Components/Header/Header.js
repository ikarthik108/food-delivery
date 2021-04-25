import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/meal.svg';
import {auth} from '../../firebase/firebase.utils.js'

const Header=({currentUser}) => {
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
			</div>
		</div>
		)
}

export default Header;