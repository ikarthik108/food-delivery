import React from 'react';
import './CartItems.scss'

const CartItem=({key,item})=> {
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

export default CartItem;