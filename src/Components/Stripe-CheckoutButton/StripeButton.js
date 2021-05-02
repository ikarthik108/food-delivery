import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {clearCart} from '../../redux/cart/cart.actions.js'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {ClearCartAfterCheckout} from '../../firebase/firebase.utils.js'



// function myFunction() {
//   myVar = setTimeout(history.push(`/`), 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }

const StripeCheckoutButton=({price,clearCart,history,currentUserId})=> {
	const onToken=token=> {
		console.log(token)
		clearCart();
		ClearCartAfterCheckout(currentUserId)
		// setTimeout(history.push(`/`), 5000);
		alert("Payment Successful,Your Order Has Been Placed.")
		

	}
		
	const priceForStripe=price*100;
	const publishableKey='pk_test_51IlWDdSEh9YmlXJPq0RzQQSspaYtW2nWaPLk0LMOL8xhgXXM0OhY8KHBbk9CaFg84c2wJt3nWUKD0aHLQM9TkXQQ00B326kmyJ';
	return (
		<div>
			<StripeCheckout label='Pay Now' name='FoodiZone Pvt Ltd' billingAddress
			shippingAddress image="" currency='INR' description={`Your Total Price is ${price}Rs`}
			amount={priceForStripe} panelLabel='Pay Now' stripeKey={publishableKey}
			token={onToken}
			/>
		</div>
		)
		
};

const mapDispatchToProps=dispatch=> ({
	clearCart:()=>dispatch(clearCart())
})

export default withRouter(connect(null,mapDispatchToProps)(StripeCheckoutButton));