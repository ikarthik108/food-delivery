import React from 'react';
import './Cart-Dropdown.scss';
import CustomButton from '../CustomButton/CustomButton.js'
import CartItem from '../CartItems/CartItems.js'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js'



const CartDropdown=({cartItems})=> {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map(cartItem=>
					(<CartItem key={cartItem.id} item={cartItem}/>
				))}
			</div>
			<CustomButton>GO TO CHECK-OUT</CustomButton>
		</div>
		)
}

const mapStateToProps=state=> ({
	cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);