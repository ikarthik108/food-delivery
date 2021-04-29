import React from 'react';
import './CheckoutPage.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import {selectCartTotal} from '../../redux/cart/cart.selectors.js'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.js'
import StripeCheckoutButton from '../../Components/Stripe-CheckoutButton/StripeButton.js'

import {clearCart} from '../../redux/cart/cart.actions.js'
import {connect} from 'react-redux';


const CheckoutPage=({cartItems,total,clearCart})=> {
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
			{total?
			 <StripeCheckoutButton price={total}/> :<h3 className=''>Your Cart is Empty, Add Items to Proceed For Payment</h3>}
			
			{/*{token? clearCart():null}*/}
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

const mapDispatchToProps=dispatch=> ({
	clearCart:()=>dispatch(clearCart())
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);