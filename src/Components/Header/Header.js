import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header=() => {
	return (
		<div className='header'>
			<Link className='logo-container' to="/">
				<Logo className='logo'/>
			</Link>
			<div className='options'>
				<Link className='option' to='/menu'>MENU</Link>
				<Link className='option' to='/menu'>CONTACT</Link>
			</div>
		</div>
		)
}

export default Header;