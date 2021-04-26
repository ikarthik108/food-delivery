import React from 'react';
import './CartIcon.scss'

import {ReactComponent as FoodDeliveryIcon} from '../../assets/bag.svg'

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

const CartIcon=({toggleCartHidden}) => {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<FoodDeliveryIcon className='food-delivery-icon'/>
			<span className='item-count'>0</span>
		</div>
		)
}

const mapDispatchToProps=dispatch=> ({
	toggleCartHidden:()=>dispatch(toggleCartHidden())
})



export default connect(null,mapDispatchToProps)(CartIcon);