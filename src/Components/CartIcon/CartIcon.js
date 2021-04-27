import React from 'react';
import './CartIcon.scss'

import {ReactComponent as FoodDeliveryIcon} from '../../assets/bag.svg'

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors.js'

const CartIcon=({toggleCartHidden,itemCount}) => {
	// let totalCartItems=0;
	// for(let i=0;i<cartItems.length;i++) {
	// 	totalCartItems=totalCartItems+ cartItems[i].quantity
	// }
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<FoodDeliveryIcon className='food-delivery-icon'/>
			<span className='item-count'>{itemCount}</span>
		</div>
		)
}

const mapDispatchToProps=dispatch=> ({
	toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=state=> ({
	itemCount:selectCartItemsCount(state)
})



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);