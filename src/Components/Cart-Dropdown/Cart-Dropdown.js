import React from 'react';
import './Cart-Dropdown.scss';
import CustomButton from '../CustomButton/CustomButton.js'
import CartItem from '../CartItems/CartItems.js'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors.js'
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'



const CartDropdown=({cartItems,history,dispatch})=> {
	
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length?(
					cartItems.map(cartItem=>
					(<CartItem key={cartItem.id} item={cartItem}/>
				))
			) : <span className='empty-message'>Your Food Cart is Empty</span>
				}
			</div>
			<CustomButton onClick={()=> {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}>GO TO CHECK-OUT</CustomButton>
		</div>
		)
}

const mapStateToProps=state=> ({
	cartItems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

//Note:When we call connect with only mapStateToProps and no second argument.
//It still by default returns the dispatch prop from MapDispatchToProps so we 
//can directly use it to toggle our cart dropdown component once we click checkout.