import { TConstructorIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

export const allIngredientsWOId = [
  {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0941',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0942',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0943',
    name: 'Соус фирменный Space Sauce',
    type: 'sauce',
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa093f',
    name: 'Мясо бессмертных моллюсков Protostomia',
    type: 'main',
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: 'https://code.s3.yandex.net/react/code/meat-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0940',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa093d',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0944',
    name: 'Соус традиционный галактический',
    type: 'sauce',
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0945',
    name: 'Соус с шипами Антарианского плоскоходца',
    type: 'sauce',
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-01-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0946',
    name: 'Хрустящие минеральные кольца',
    type: 'main',
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
    image_mobile:
      'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/mineral_rings-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0947',
    name: 'Плоды Фалленианского дерева',
    type: 'main',
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: 'https://code.s3.yandex.net/react/code/sp_1.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sp_1-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0948',
    name: 'Кристаллы марсианских альфа-сахаридов',
    type: 'main',
    proteins: 234,
    fat: 432,
    carbohydrates: 111,
    calories: 189,
    price: 762,
    image: 'https://code.s3.yandex.net/react/code/core.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/core-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa0949',
    name: 'Мини-салат Экзо-Плантаго',
    type: 'main',
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: 'https://code.s3.yandex.net/react/code/salad.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/salad-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/salad-large.png'
  },
  {
    _id: '643d69a5c3f7b9001cfa094a',
    name: 'Сыр с астероидной плесенью',
    type: 'main',
    proteins: 84,
    fat: 48,
    carbohydrates: 420,
    calories: 3377,
    price: 4142,
    image: 'https://code.s3.yandex.net/react/code/cheese.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/cheese-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png'
  }
];

export const allIngredientsWId = allIngredientsWOId.map((ingredient) => {
  const id = ingredient._id;
  return {
    ...ingredient,
    id
  };
});

export const singleNonBunIngredientWOId = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
};

export const singleNonBunIngredientWId = {
  id: '643d69a5c3f7b9001cfa0941',
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
};

export const singleBunIngredientWOId = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
};

export const singleBunIngredientWId = {
  id: '643d69a5c3f7b9001cfa093c',
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
};

export const allNonBunIngredientsWOId = allIngredientsWOId.filter(
  (ingredient) => ingredient.type !== 'bun'
);

export const allNonBunIngredientsWId = allIngredientsWId.filter(
  (ingredient) => ingredient.type !== 'bun'
);

export const allIngredientsWithDeletedIngredient =
  allNonBunIngredientsWOId.filter(
    (ingredient) => ingredient.name !== 'Биокотлета из марсианской Магнолии'
  );

export const orderedIngredientsWOId = allNonBunIngredientsWOId.slice(0, 4);

export const orderedIngredientsWId = orderedIngredientsWOId.map(
  (ingredient) => {
    const id = ingredient._id;
    return {
      ...ingredient,
      id
    };
  }
);

export const allNonBunIngredientsWOIdSwap1to2 = allNonBunIngredientsWOId.map(
  (ingredient) => ingredient
);
[allNonBunIngredientsWOIdSwap1to2[1], allNonBunIngredientsWOIdSwap1to2[2]] = [
  allNonBunIngredientsWOIdSwap1to2[2],
  allNonBunIngredientsWOIdSwap1to2[1]
];

export const allNonBunIngredientsWOIdSwap1to0 = allNonBunIngredientsWOId.map(
  (ingredient) => ingredient
);
[allNonBunIngredientsWOIdSwap1to0[1], allNonBunIngredientsWOIdSwap1to0[0]] = [
  allNonBunIngredientsWOIdSwap1to0[0],
  allNonBunIngredientsWOIdSwap1to0[1]
];

export const feedsMockData = {
  orders: [
    {
      _id: '66cb3152119d45001b501fb3',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный био-марсианский бургер',
      createdAt: '2024-08-25T13:27:46.295Z',
      updatedAt: '2024-08-25T13:27:46.787Z',
      number: 51066
    },
    {
      _id: '66cb2d57119d45001b501fa8',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный бессмертный spicy бургер',
      createdAt: '2024-08-25T13:10:47.109Z',
      updatedAt: '2024-08-25T13:10:47.605Z',
      number: 51065
    },
    {
      _id: '66cb2d2f119d45001b501fa6',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-25T13:10:07.665Z',
      updatedAt: '2024-08-25T13:10:08.189Z',
      number: 51064
    },
    {
      _id: '66cb2734119d45001b501f98',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-08-25T12:44:36.184Z',
      updatedAt: '2024-08-25T12:44:36.633Z',
      number: 51063
    }
  ],
  total: 4,
  totalToday: 4,
  isLoading: false,
  error: undefined
};

export const ingredientsMockData = {
  ingredients: [
    {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa0941',
      name: 'Биокотлета из марсианской Магнолии',
      type: 'main',
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: 'https://code.s3.yandex.net/react/code/meat-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa093e',
      name: 'Филе Люминесцентного тетраодонтимформа',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png'
    },
    {
      _id: '643d69a5c3f7b9001cfa0942',
      name: 'Соус Spicy-X',
      type: 'sauce',
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png'
    }
  ],
  loading: false,
  error: null
};

export const orderMockData = {
  orderRequest: false,
  orderModalData: {
    _id: '66cb337d119d45001b501fbb',
    status: 'done',
    name: 'Флюоресцентный био-марсианский бургер',
    createdAt: '2024-08-25T13:37:01.496Z',
    updatedAt: '2024-08-25T13:37:02.113Z',
    number: 51067,
    ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093d']
  },
  error: undefined
};

export const orderReceivedMockData = {
  success: true,
  name: 'Флюоресцентный био-марсианский бургер',
  order: {
    _id: '66cb337d119d45001b501fbb',
    status: 'done',
    name: 'Флюоресцентный био-марсианский бургер',
    createdAt: '2024-08-25T13:37:01.496Z',
    updatedAt: '2024-08-25T13:37:02.113Z',
    number: 51067,
    ingredients: ['643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093d'],
    owner: ''
  }
};

export const ordersMockData = {
  orders: [
    {
      _id: '66b1e560119d45001b4fdd85',
      status: 'done',
      name: 'Экзо-плантаго флюоресцентный люминесцентный метеоритный бургер',
      createdAt: '2024-08-06T08:57:04.948Z',
      updatedAt: '2024-08-06T08:57:05.392Z',
      number: 48588,
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0949'
      ]
    },
    {
      _id: '66cb176e119d45001b501f79',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0944'
      ],
      status: 'done',
      name: 'Астероидный краторный минеральный традиционный-галактический био-марсианский бургер',
      createdAt: '2024-08-25T11:37:18.536Z',
      updatedAt: '2024-08-25T11:37:18.998Z',
      number: 51058
    },
    {
      _id: '66cb2449119d45001b501f96',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942'
      ],
      status: 'done',
      name: 'Краторный spicy био-марсианский бургер',
      createdAt: '2024-08-25T12:32:09.731Z',
      updatedAt: '2024-08-25T12:32:10.206Z',
      number: 51061
    }
  ],
  isLoading: true
};

export const userData = {
  isAuthChecked: true,
  user: {
    email: 'reginanikogosian@gmail.com',
    name: 'Жак-Ив Кусто'
  },
  error: ''
};

export const userDataUpdated = {
  isAuthChecked: true,
  user: {
    email: 'reginanikogosian@gmail.com',
    name: 'Жак-Ив'
  },
  error: ''
};

export const userResponse = {
  success: true,
  user: {
    email: 'reginanikogosian@gmail.com',
    name: 'Жак-Ив Кусто'
  }
};

export const userResponseUpdated = {
  success: true,
  user: {
    email: 'reginanikogosian@gmail.com',
    name: 'Жак-Ив'
  }
};

export const userRegisterData = {
  email: 'reginanikogosian@gmail.com',
  name: 'Жак-Ив Кусто',
  password: '1234'
};

export const userRegisterDataUpdated = {
  email: 'reginanikogosian12@gmail.com',
  name: 'Жак-Ив',
  password: '1234'
};
