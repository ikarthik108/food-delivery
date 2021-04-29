import {createSelector} from 'reselect';

//Two types of selector
// 1.Input Selector (Doesnt Use create selector)
// 2.Output Selector(Uses input selector and createSelector both to build themselves)

//input selector(generally takes the root state and just returns a slice of it(Generally one layer deep from the state usually))

const selectCart=(state)=>(state.cart)
//The reason we need this i/p selector is because the next output selctor down will use this this i/p selector

//first param input selector,second param is a func call which will return the value we want of the selector

//this is now a memoized selector
export const selectCartItems= createSelector(
	[selectCart],
	(cart)=>cart.cartItems 
)

export const selectCartHidden=createSelector(
	[selectCart],
	(cart)=>cart.hidden
);

export const selectCartItemsCount=createSelector(
	[selectCartItems],
	(cartItems)=>cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
);

export const selectCartTotal=createSelector(
	[selectCartItems],
	(cartItems)=>cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+ (cartItem.quantity*cartItem.price),0)
);
