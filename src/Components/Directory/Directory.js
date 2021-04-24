import React from 'react';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem.js'

class Directory extends React.Component {
	constructor () {
		super();
		this.state={
			sections: [
			  {
			    title: 'Dosa varieties',
			    imageUrl: 'https://www.bigbasket.com/media/uploads/recipe/w-l/1778_6_1.jpg',
			    id: 1,
			    linkUrl:'Dosa'
			  },
			  {
			    title: 'Idli Varieties',
			    imageUrl: 'https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2019/10/1/idli.jpg.transform/onm-articleimagemob/image.jpg',
			    id: 2,
			    linkUrl:''
			  },
			  {
			    title: 'Vada Varieties',
			    imageUrl: 'https://st.depositphotos.com/3147737/4982/i/600/depositphotos_49827853-stock-photo-medu-vada-a-south-indian.jpg',
			    id: 3,
			    linkUrl:''
			  },
			  {
			    title: 'Upma Varieties',
			    imageUrl: 'https://image.shutterstock.com/image-photo/upma-made-samolina-rava-most-260nw-1904780035.jpg',
			    size: 'large',
			    id: 4,
			    linkUrl:''
			  },
			  {
			    title: 'Sweet Items',
			    imageUrl: 'https://www.merisaheli.com/wp-content/uploads/2018/12/india-desserts-pudding-rava-kesari-685x366.jpg',
			    size: 'large',
			    id: 5,
			    linkUrl:''
			  }
			]
		} 
	}

	render () {
		return (
			<div className='directory-menu'>
				{
					this.state.sections.map(section=> (
						<MenuItem key={section.id} title={section.title} 
						imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>))
				}
			</div>
			)
	}
}

export default Directory;

