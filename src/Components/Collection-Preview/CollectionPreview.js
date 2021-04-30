import React from 'react';
import './CollectionPreview.scss'

import CollectionItem from '../Collection-Item/CollectionItem.js'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const CollectionPreview = ({title,items,history,match}) => {
	// console.log(history);
	// console.log(match)
	const words=title.split(" ");
	const route=words[0].toLowerCase()
	return (
		<div className='collection-preview'>
			<Link className='option' to={`${history.location.pathname}/${route}`}><h2 className='title'>{title.toUpperCase()}</h2></Link>
			
			<div className='preview'>
				{items
					.filter((item,index)=> index < 4)
					.map(item => (
					<CollectionItem key={item.id} item={item}/>	
					))}
			</div>
		</div>
		)
}

export default withRouter(CollectionPreview);