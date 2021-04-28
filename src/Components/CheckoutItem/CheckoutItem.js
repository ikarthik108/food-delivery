import React from 'react';
import './CheckoutItem.scss';
import {clearItemFromCart} from '../../redux/cart/cart.actions.js'
import {connect} from 'react-redux'
import {addItem} from  '../../redux/cart/cart.actions.js';
import {removeItem} from  '../../redux/cart/cart.actions.js';

const CheckoutItem=({cartItem,clearItem,addItem,removeItem})=> {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={cartItem.imageUrl} alt='item'/>
			</div>
			<span className='description'>{cartItem.name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094;</div>
				<span className='value'>{cartItem.quantity}</span>
				<div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
			</span>
			<span className='price'>{cartItem.price}</span>
			<div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
		</div>
		)
	
}

const mapDispatchToProps=dispatch=> ({
	clearItem:item=>dispatch(clearItemFromCart(item)),
	addItem:item=>dispatch(addItem(item)),
	removeItem:item=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
