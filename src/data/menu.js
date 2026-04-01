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
          ingredients: ["Lettuce", "Tomato", "Pickles", "Onion Straws", "Turkey Bacon", "Cheddar", "Tru Sauce"],
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
          ingredients: ["Lettuce", "Tomato", "Pickles", "Onion Rings", "Avocado", "Mozzarella", "Turkey Bacon", "Ranch"],
        },
        {
          name: "Wild Western",
          price: 17.49,
          badge: null,
          ingredients: ["Sweet Relish", "Poached Eggs", "Turkey Bacon", "Cheddar", "Pepper Jack", "Onion Straws", "Holandaise"],
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
        { name: "Pickle Chips", price: null, badge: null, ingredients: [] },
        { name: "Veggie Medley", price: null, badge: null, ingredients: [] },
      ],
    },
  ],
  note: "ALL MEALS INCLUDE FRIES & DRINK",
  dietary: ["Kosher", "Halal", "Gluten Friendly"],
};
