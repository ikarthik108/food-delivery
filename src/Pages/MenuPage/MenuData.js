const MENU_DATA = {
  dosa:{
    id: 1,
    title: 'Dosa Varieties',
    routeName: 'dosa',
    items: [
      {
        id: 1,
        name: 'Plain Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 25,
        description:" "
      },
      {
        id: 2,
        name: 'Masala Dosa',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 18,
        description:" "
      },
      {
        id: 3,
        name: 'Rava Dosa',
        imageUrl: 'https://rakskitchen.net/wp-content/uploads/2016/03/Rava-dosai-recipe.jpg',
        price: 35,
        description:" "
      },
      {
        id: 4,
        name: 'Rava Masala Dosa',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/oats-masala-dosa.jpg',
        price: 25,
        description:" "
      },
      {
        id: 5,
        name: 'Neer Dosa',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/neer-dosa-1.jpg',
        price: 18,
        description:" "
      },
      {
        id: 6,
        name: 'Onion Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 14,
        description:" "
      },
      {
        id: 7,
        name: 'Ragi Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 18,
        description:" "
      },
      {
        id: 8,
        name: 'Mysore Masala Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 14,
        description:" "
      },
      {
        id: 9,
        name: 'Sabudana Dosa',
        imageUrl: 'https://udupi-recipes.com/wp-content/uploads/2019/05/yummy-sabudana-dosa.jpg',
        price: 16,
        description:" "
      }
    ]
  },
  idli:{
    id: 2,
    title: 'Idli Varieties',
    routeName: 'idli',
    items: [
      {
        id: 10,
        name: 'Rava Idli',
        imageUrl: 'https://cdn1.foodviva.com/static-content/food-images/breakfast-recipes/rava-idli-recipe/rava-idli-2.jpg',
        price: 220,
        description:" "
      },
      {
        id: 11,
        name: 'Kanchipuram Idli',
        imageUrl: 'https://i.pinimg.com/originals/b3/fc/be/b3fcbedf1e557914c9b97c85c5b09216.jpg',
        price: 280,
        description:"Popular Indian bowl-shaped pancake made from a batter of rice flour and coconut milk served with fresh Coconut Chutney."
      },
      {
        id: 12,
        name: 'Podi Idli',
        imageUrl: 'https://vaya.in/recipes/wp-content/uploads/2019/10/Idli-Podi-and-Podi-Idly.jpg',
        price: 110,
        description:" "
      },
      {
        id: 13,
        name: 'Idli Fry',
        imageUrl: 'https://www.myhealthybreakfast.in/images/snack01/fried-idli.jpg',
        price: 160,
        description:" "
      },
      {
        id: 14,
        name: 'Vegetable Idli',
        imageUrl: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/public/recipe_thumb/medium/1438669840caLnWWStVm.jpg',
        price: 160,
        description:" "
      },
      {
        id: 15,
        name: 'Oats Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 160,
        description:" "
      },
      {
        id: 16,
        name: 'Ragi Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 190,
        description:" "
      },
      {
        id: 17,
        name: 'Moong Dal Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 200,
        description:" "
      }
    ]
  },
  vada:{
    id: 3,
    title: 'Vada Varieties',
    routeName: 'vada',
    items: [
      {
        id: 18,
        name: 'Medu Vada',
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/South_Indian_Medu_Vada_Sambar_with_Medu_Vada_Maker-8.jpg',
        price: 125,
        description:" "
      },
      {
        id: 19,
        name: 'Batata Vada',
        imageUrl: 'https://img.freepik.com/free-photo/indian-street-food-vada-pav_57665-5797.jpg?size=626&ext=jpg',
        price: 90,
        description:" "
      },
      {
        id: 20,
        name: 'Maddur Vada',
        imageUrl: 'https://www.madhuseverydayindian.com/wp-content/uploads/2020/05/maddur-vada-karnataka-.jpg',
        price: 90,
        description:" "
      },
      {
        id: 21,
        name: 'Masala Vada',
        imageUrl: 'https://www.manjulaskitchen.com/wp-content/uploads/masala_vada.jpg',
        price: 165,
        description:" "
      },
      {
        id: 22,
        name: 'Sabudana Vada',
        imageUrl: 'https://www.ndtv.com/cooks/images/Sabudana.Vada.000.jpg',
        price: 185,
        description:" "
      }
    ]
  },
  upma:{
    id: 4,
    title: 'Upma Varieties',
    routeName: 'upma',
    items: [
      {
        id: 23,
        name: 'Rava Upma',
        imageUrl: 'https://i1.wp.com/kalimirchbysmita.com/wp-content/uploads/2015/04/Vegetable_Upma-1438-11-1024x715-1024x715.jpg',
        price: 25,
        description:" "
      },
      {
        id: 24,
        name: 'Tomato Upma',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/tomato-upma-recipe.jpg',
        price: 20,
        description:" "
      },
      {
        id: 25,
        name: 'Semiya Upma',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/12/semiya-upma-recipe.jpg',
        price: 80,
        description:" "
      },
      {
        id: 26,
        name: 'Aval Upma',
        imageUrl: 'https://achalafood.com/wp-content/uploads/2018/07/mixed-vegetable-poha-featured-image.jpg',
        price: 80,
        description:" "
      },
      {
        id: 27,
        name: 'Javvarisi Upma',
        imageUrl: 'https://i.pinimg.com/236x/f2/eb/8d/f2eb8db7d9741a5595aa46c6970445c1.jpg',
        price: 45,
        description:" "
      },
      {
        id: 28,
        name: 'Wheat Rava Upma',
        imageUrl: 'https://c2.staticflickr.com/6/5623/31040999830_8f73a6c15b_z.jpg',
        price: 135,
        description:" "
      },
      {
        id: 29,
        name: 'Steamed Moong Dal Upma',
        imageUrl: 'https://www.foodyindianmom.com/images/moong_upma.jpg',
        price: 20,
        description:" "
      }
    ]
  },
  sweets:{
    id: 5,
    title: 'Sweet Items',
    routeName: 'sweets',
    items: [
      {
        id: 30,
        name: 'Paal Payasam',
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Paal_Payasam_Recipe_Rice_Kheer-1_400.jpg',
        price: 325,
        description:" "
      },
      {
        id: 31,
        name: 'Mysore Pak',
        imageUrl: 'https://cdn.cdnparenting.com/articles/2019/02/19092259/Mysore-Pak-Recipe-3467583981.jpg',
        price: 20,
        description:" "
      },
      {
        id: 32,
        name: 'Badam Halwa',
        imageUrl: 'https://5.imimg.com/data5/MC/QH/MY-58165823/fresh-badam-halwa-500x500.jpeg',
        price: 25,
        description:" "
      },
      {
        id: 33,
        name: 'Pineapple Kesari',
        imageUrl: 'https://udupi-recipes.com/wp-content/uploads/2014/06/Pineapple-kesari-001.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Appam',
        imageUrl: 'https://i0.wp.com/www.jeyashriskitchen.com/wp-content/uploads/2015/11/karthigai-appam.jpg',
        price: 40,
        description:" "
      },
      {
        id: 35,
        name: 'Sweet Pongal',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/sweet-pongal-recipe.jpg',
        price: 25,
        description:" "
      }
    ]
  }
}

export default MENU_DATA;
