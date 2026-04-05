export const menuData = {
  categories: [
    {
      id: "burgers",
      name: "GRILLED 1/2 LB BURGERS",
      icon: "🔥",
      items: [
        {
          name: "Tru Burger",
          price: 15.99,
          badge: "⭐ Fan Favorite",
          ingredients: ["Lettuce", "Tomato", "Pickles", "Onion Rings", "Turkey Bacon", "Cheddar", "Tru Sauce"],
        },
        {
          name: "Flamethrower",
          price: 16.99,
          badge: "🌶️ Spicy",
          heat: 4,
          ingredients: ["Jalapeños", "Banana Peppers", "Turkey Bacon", "Onion Rings", "Pepper Jack", "Flamethrower Sauce"],
        },
        {
          name: "Boss Burger",
          price: 15.99,
          badge: "👑",
          ingredients: ["Lettuce", "Tomato", "Pickles", "Crispy Onions", "Avocado", "Mozzarella", "Turkey Bacon", "Ranch"],
        },
        {
          name: "Wild Western",
          price: 17.49,
          badge: null,
          ingredients: ["Sweet Relish", "Poached Eggs", "Turkey Bacon", "Cheddar", "Pepper Jack", "Crispy Onions", "Hollandaise"],
        },
      ],
    },
    {
      id: "chicken",
      name: "CRISPY CHICKEN SANDWICHES",
      icon: "🍗",
      items: [
        {
          name: "Mother Clucker",
          price: 15.49,
          badge: "⭐ Fan Favorite",
          ingredients: ["Lettuce", "Tomato", "Pickles", "Onion Rings", "Turkey Bacon", "Avocado", "Cheddar", "Tru Sauce"],
        },
        {
          name: "Kickin' Chicken",
          price: 16.49,
          badge: "🌶️ Spicy",
          heat: 3,
          ingredients: ["Jalapeños", "Turkey Bacon", "Onion Rings", "Pepper Jack", "Flamethrower Sauce"],
        },
        {
          name: "Bawk Wild",
          price: 15.99,
          badge: null,
          ingredients: ["Lettuce", "Tomato", "Pickles", "Crispy Onions", "Coleslaw", "Turkey Bacon", "Cheddar", "Tru Sauce"],
        },
        {
          name: "Honey Pimento",
          price: 15.49,
          badge: null,
          ingredients: ["Lettuce", "Tomato", "Pickles", "Crispy Onions", "Pimento Cheese", "Hot Honey"],
        },
      ],
    },
    {
      id: "kids",
      name: "KIDS MENU",
      icon: "🧒",
      items: [
        { name: "Grilled Cheese", price: 5.49, badge: null, ingredients: [] },
        { name: "Chicken Sandwich", price: 5.99, badge: null, ingredients: ["Cheese Optional"] },
        { name: "Burger", price: 5.99, badge: null, ingredients: ["Cheese Optional"] },
        { name: "Chicken Tenders (5)", price: 6.49, badge: null, ingredients: [] },
        { name: "Chicken Bites (10)", price: 5.99, badge: null, ingredients: [] },
      ],
    },
    {
      id: "extras",
      name: "EXTRAS & SIDES",
      icon: "🍟",
      items: [
        { name: "Tru Fries", price: null, badge: null, ingredients: [] },
        { name: "Sweet Fries", price: null, badge: null, ingredients: [] },
        { name: "Tru Loaded Fries", price: null, badge: "+$2", ingredients: [] },
        { name: "Sweet Loaded Fries", price: null, badge: "+$2", ingredients: [] },
        { name: "O-Rings", price: null, badge: null, ingredients: [] },
        { name: "Fried Pickles", price: null, badge: null, ingredients: [] },
        { name: "Veggie Medley", price: null, badge: null, ingredients: [] },
      ],
    },
  ],
  note: "ALL MEALS INCLUDE FRIES & DRINK",
  dietary: ["Kosher", "Halal", "Gluten Friendly"],
};

export const dailySpecials = [
  {
    day: 'Sunday',
    name: 'Ox Tails Plate',
    price: 22.99,
    description: 'Served with a veggie medley, fried biscuits, mashed potatoes and brown gravy',
  },
  {
    day: 'Monday',
    name: 'Shrimp Trio',
    price: 18.99,
    description: 'Beer battered shrimp, boom boom shrimp, garlic and herb shrimp, wild rice, veggie medley and garlic bread',
  },
  {
    day: 'Tuesday',
    name: 'Mac-N-Br\u00ed',
    price: 13.99,
    description: 'Four cheese Mac and Cheese with shredded brisket, chopped turkey bacon, toasted breadcrumbs, and fried biscuits',
  },
  {
    day: 'Wednesday',
    name: 'Fish and Chips',
    price: 14.99,
    description: 'Beer battered fish over a bed of rice and mixed veggie medley and twisted chips with lemon',
  },
  {
    day: 'Thursday',
    name: "Chef's Wings",
    price: null,
    sizes: '6pc \u2014 $8.99 \u00b7 10pc \u2014 $13.99 \u00b7 15pc \u2014 $18.99',
    description: 'Served with carrots and celery. Choose your sauce: Plain, Dry Rub, Garlic Parm, Hot Honey, Tennessee BBQ, Mild, or T.N.T. Special',
  },
  {
    day: 'Friday',
    name: 'Seafood Jambalaya',
    price: 17.99,
    description: 'Diced shallots, baby shrimp, crawfish, andouille beef, green chilies, fire roasted tomatoes, Cajun seasoning, over wild rice',
  },
  {
    day: 'Saturday',
    name: "Chef's Lamb Chops",
    price: 24.99,
    description: 'Served over wild rice, a side of veggie medley, dressed with a wine roux and garlic bread',
  },
];
