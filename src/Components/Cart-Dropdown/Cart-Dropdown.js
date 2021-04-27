import React from 'react';
import './Cart-Dropdown.scss';
import CustomButton from '../CustomButton/CustomButton.js'


const CartDropdown=()=> {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'/>
			<CustomButton>CHECK OUT</CustomButton>
		</div>
		)
}

export default CartDropdown;