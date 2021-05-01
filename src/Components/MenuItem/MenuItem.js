import React from 'react';
// import './MenuItem.scss'
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './MenuItem.styles.js';

import {withRouter} from 'react-router-dom';

const MenuItem=({title,imageUrl,size,linkUrl,history,match})=> {
	return ( 
		<MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
			<BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
			<ContentContainer className='content'>
					<ContentTitle>{title.toUpperCase()}</ContentTitle>
					<ContentSubtitle>ORDER NOW</ContentSubtitle>
			</ContentContainer>
		</MenuItemContainer>
		)
}

export default withRouter(MenuItem);