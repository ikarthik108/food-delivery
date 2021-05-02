import React from 'react';
import './CheckoutItem.scss';
import {clearItemFromCart} from '../../redux/cart/cart.actions.js'
import {connect} from 'react-redux'
import {addItem} from  '../../redux/cart/cart.actions.js';
import {removeItem} from  '../../redux/cart/cart.actions.js';
import {AddUserCartItems,RemoveUserCartItems} from '../../firebase/firebase.utils.js'
import {selectCurrentUser} from '../../redux/User/user.selectors.js'


const CheckoutItem=({cartItem,clearItem,addItem,removeItem,currentUser})=> {
	const userId=currentUser?currentUser.id:null
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={cartItem.imageUrl} alt='item'/>
			</div>
			<span className='description'>{cartItem.name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={()=>{removeItem(cartItem);RemoveUserCartItems(userId,cartItem)}}>&#10094;</div>
				<span className='value'>{cartItem.quantity}</span>
				<div className='arrow' onClick={()=>{addItem(cartItem);AddUserCartItems(userId,cartItem)}}>&#10095;</div>
			</span>
			<span className='price'>{cartItem.price}</span>
			<div className='remove-button' 
			onClick={()=>{clearItem(cartItem);RemoveUserCartItems(userId,cartItem,clearItem)}}>&#10005;</div>
			
		</div>
		)
	
}

const mapDispatchToProps=dispatch=> ({
	clearItem:item=>dispatch(clearItemFromCart(item)),
	addItem:item=>dispatch(addItem(item)),
	removeItem:item=>dispatch(removeItem(item))
})

const mapStateToProps=state=> ({
	currentUser:selectCurrentUser(state)
	
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutItem);
