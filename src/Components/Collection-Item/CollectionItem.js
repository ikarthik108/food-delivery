import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton.js'
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions.js'
import {selectCurrentUser} from '../../redux/User/user.selectors.js'

import {AddUserCartItems} from '../../firebase/firebase.utils.js'


const CollectionItem=({id,item,addItem,currentUser})=> {
	const userId=currentUser?currentUser.id:null
	// const userCart=currentUser?(currentUser.cartItems):null
	// console.log('cart',userCart)

	// console.log(item)
	return (
		<div className='collection-item'>
			<div className='image' style={{backgroundImage:`url(${item.imageUrl})`}}/>
			{ item.description ?
			 <div className='item-description'>{item.description}</div>
			 :null
			}
			<div className='collection-footer'>
				<span className='name'>{item.name}</span>
				<span className='price'>{item.price}</span>
			</div>
			<CustomButton onClick={()=>{addItem(item);AddUserCartItems(userId,item)}} inverted>Add to Cart</CustomButton>
		</div>
		)
}


const mapDispatchToProps=dispatch=> ({
	addItem:item=>dispatch(addItem(item))
})

const mapStateToProps=state=> ({
	currentUser:selectCurrentUser(state)
	
})



export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);