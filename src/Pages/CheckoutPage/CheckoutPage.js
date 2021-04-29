import React from 'react';
import './CheckoutPage.scss'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import {selectCartTotal} from '../../redux/cart/cart.selectors.js'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.js'
import StripeCheckoutButton from '../../Components/Stripe-CheckoutButton/StripeButton.js'


const CheckoutPage=({cartItems,total})=> {
	return (
		<div className='checkout-page' >
			<div className='checkout-header'>

				<div className='header-block'>
					<span>Product</span>
				</div>

				<div className='header-block'>
					<span>Description</span>
				</div>

				<div className='header-block'>
					<span>Quantity</span>
				</div>

				<div className='header-block'>
					<span>Price</span>
				</div>

				<div className='header-block'>
					<span>Remove</span>
				</div>
			
			</div>
				{cartItems.map(cartItem=> (
					<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
			<div className='total'><span>TOTAL: &#8377;{total}</span></div>
			<StripeCheckoutButton price={total}/> 
			<div className='test-details'>
				<span>
				Please use the following Card Details For Testing 
				<br/>
				Card No: 4242 4242 4242 4242 Expiry Date: 04/22 CVC: 000
				</span>
			</div>
			
		</div>
		)
}

const mapStateToProps=state=>({
	cartItems:selectCartItems(state),
	total:selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);