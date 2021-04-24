const MENU_DATA = [
  {
    id: 1,
    title: 'Dosa Varieties',
    routeName: 'dosa',
    items: [
      {
        id: 1,
        name: 'Plain Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Masala Dosa',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Rava Dosa',
        imageUrl: 'https://rakskitchen.net/wp-content/uploads/2016/03/Rava-dosai-recipe.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Rava Masala Dosa',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/oats-masala-dosa.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Neer Dosa',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/neer-dosa-1.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Onion Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Ragi Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Mysore Masala Dosa',
        imageUrl: 'https://img-global.cpcdn.com/recipes/ff3b6e216d3d2150/1200x630cq70/photo.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Sabudana Dosa',
        imageUrl: 'https://udupi-recipes.com/wp-content/uploads/2019/05/yummy-sabudana-dosa.jpg',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Idli Varieties',
    routeName: 'idli',
    items: [
      {
        id: 10,
        name: 'Rava Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Kanchipuram Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Podi Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Idli Fry',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Vegetable Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Oats Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Ragi Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Moong Dal Idli',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Vada Varieties',
    routeName: 'vada',
    items: [
      {
        id: 18,
        name: 'Medu Vada',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Batata Vada',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Maddur Vada',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Masala Vada',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Sabudana Vada',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Upma Varieties',
    routeName: 'upma',
    items: [
      {
        id: 23,
        name: 'Vegetable Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Rava Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Semya Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Aval Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Javvarisi Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Rice Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Moong Dal Upma',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Sweet Items',
    routeName: 'sweets',
    items: [
      {
        id: 30,
        name: 'Paal Payasam',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Mysore Pak',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Badam Halwa',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Pineapple Kesari',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Appam',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'Sweet Pongal',
        imageUrl: 'https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg',
        price: 25
      }
    ]
  }
];

export default MENU_DATA;
