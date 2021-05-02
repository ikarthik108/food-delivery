import React from 'react';
import './CartItems.scss'

import {selectCurrentUser} from '../../redux/User/user.selectors.js'
import {connect} from 'react-redux';

const CartItem=({key,item,currentUser})=> {
	return (
		<div className='cart-item'>
			<img src={item.imageUrl} alt='item'/>
			<div className='item-details'>
				<span className='name'>{item.name}</span>
				<span className='price'>{item.quantity} X {item.price}&#8377;</span>
			</div>
		</div>
		)
}

const mapStateToProps=state=> ({
	currentUser:selectCurrentUser(state)
	
})

export default connect(mapStateToProps)(CartItem);