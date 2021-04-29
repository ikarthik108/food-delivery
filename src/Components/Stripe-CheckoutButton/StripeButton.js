import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=> {
	const onToken=token=> {
		console.log(token)
		alert("Payment Successful")
	}
	const priceForStripe=price*100;
	const publishableKey='pk_test_51IlWDdSEh9YmlXJPq0RzQQSspaYtW2nWaPLk0LMOL8xhgXXM0OhY8KHBbk9CaFg84c2wJt3nWUKD0aHLQM9TkXQQ00B326kmyJ';
	return (
		<StripeCheckout 
		label='Pay Now'
		name='FoodiZone Pvt Ltd'
		billingAddress
		shippingAddress
		image=""
		currency='INR'
		description={`Your Total Price is ${price}Rs`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		stripeKey={publishableKey}
		token={onToken}
		/>
		);
};

export default StripeCheckoutButton;