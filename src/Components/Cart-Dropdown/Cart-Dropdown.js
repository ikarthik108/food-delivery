import React from 'react';
import './Cart-Dropdown.scss';
import CustomButton from '../CustomButton/CustomButton.js'
import CartItem from '../CartItems/CartItems.js'
import {connect} from 'react-redux';



const CartDropdown=({cartItems})=> {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map(cartItem=>
					(<CartItem key={cartItem.id} item={cartItem}/>
				))}
			</div>
			<CustomButton>CHECK OUT</CustomButton>
		</div>
		)
}

const mapStateToProps=state=> ({
	cartItems:state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);