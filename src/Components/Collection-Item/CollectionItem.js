import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton.js'
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions.js'


const CollectionItem=({id,item,addItem})=> {
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
			<CustomButton onClick={()=>addItem(item)} inverted>Add to Cart</CustomButton>
		</div>
		)
}


const mapDispatchToProps=dispatch=> ({
	addItem:item=>dispatch(addItem(item))
})



export default connect(null,mapDispatchToProps)(CollectionItem);