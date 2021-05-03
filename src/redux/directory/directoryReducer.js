const INITIAL_STATE={
	sections: [
				  {
				    title: 'Dosa varieties',
				    imageUrl: 'https://www.bigbasket.com/media/uploads/recipe/w-l/1778_6_1.jpg',
				    id: 1,
				    linkUrl:'menu/dosa'
				  },
				  {
				    title: 'Idli Varieties',
				    imageUrl: 'https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2019/10/1/idli.jpg.transform/onm-articleimagemob/image.jpg',
				    id: 2,
				    linkUrl:'menu/idli'
				  },
				  {
				    title: 'Vada Varieties',
				    imageUrl: 'https://st.depositphotos.com/3147737/4982/i/600/depositphotos_49827853-stock-photo-medu-vada-a-south-indian.jpg',
				    id: 3,
				    linkUrl:'menu/vada'
				  },
				  {
				    title: 'Upma Varieties',
				    imageUrl: 'https://image.shutterstock.com/image-photo/upma-made-samolina-rava-most-260nw-1904780035.jpg',
				    size: 'large',
				    id: 4,
				    linkUrl:'menu/upma'
				  },
				  {
				    title: 'Sweet Items',
				    imageUrl: 'https://www.merisaheli.com/wp-content/uploads/2018/12/india-desserts-pudding-rava-kesari-685x366.jpg',
				    size: 'large',
				    id: 5,
				    linkUrl:'menu/sweet'
				  }
			]
}

const directoryReducer=(state=INITIAL_STATE,action)=> {
	switch(action.type) {
		default:
			return state;
	}
}

export default directoryReducer;