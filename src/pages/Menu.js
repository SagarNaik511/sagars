import React from 'react';
import MenuCard from './MenuCard';
import './styles/Menu.css';

function Menu() {
  const exchangeRate = 83; // 1 USD = 83 INR (adjust this value based on the latest rate)

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "A classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
      price: 5.29,
      image: '/images/pizza.webp',
      category: "Main Course",
    },
    {
      id: 2,
      name: "Grilled Chicken",
      description: "Juicy grilled chicken served with roasted veggies and herb seasoning.",
      price: 5.88,
      image: '/images/chiki.jpg',
      category: "Main Course",
    },
    {
      id: 3,
      name: "Hyderabad Biryani",
      description: "Hyderabad Biryani is a legendary dish known for its aromatic spices, tender meat, and rich flavors.",
      price: 5.4,
      image: '/images/Hb.jpg',
      category: "Main Course",
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan, croutons, and Caesar dressing.",
      price: 2,
      image: '/images/salad.jpg',
      category: "Starters",
    },
    {
      id: 5,
      name: "Pasta",
      description: "Pasta is a versatile Italian dish made from wheat dough, typically served with a variety of sauces, meats, and vegetables.",
      price: 3,
      image: '/images/pasta.jpg',
      category: "Main Course",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Decadent chocolate cake with layers of rich chocolate frosting.",
      price: 7,
      image: '/images/cake.webp',
      category: "Desserts",
    },
    {
      id: 7,
      name: "Pudding",
      description: "Decadent chocolate cake with layers of rich chocolate frosting.",
      price: 1,
      image: '/images/pudding.jpg',
      category: "Desserts",
    },
    {
      id: 8,
      name: "Chocolate IceCream",
      description: "Decadent chocolate cake with layers of rich chocolate frosting.",
      price: 2,
      image: '/images/chocoice.jpg',
      category: "Desserts",
    },
    {
      id: 9,
      name: "Garlic Bread",
      description: "Crispy garlic bread with a touch of butter and herbs.",
      price: 4,
      image: '/images/gbread.jpeg',
      category: "Starters",
    },
    {
      id: 10,
      name: "Biriyani",
      description: "Its just good",
      price: 5, // price in USD
      image: '/images/biri.avif',
      category: "Main Course",
    },
  ];

  // Convert prices to rupees
  const menuItemsWithRupees = menuItems.map((item) => ({
    ...item,
    price: Math.round(item.price * exchangeRate), // Convert and round to nearest rupee
  }));

  // Group menu items by category
  const groupedMenu = menuItemsWithRupees.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="menu">
      <h1 className="menu-title">Our Menu</h1>
      {Object.keys(groupedMenu).map((category) => (
        <div key={category} className="menu-section">
          <h2 className="menu-section-title">{category}</h2>
          <div className="menu-list">
            {groupedMenu[category].map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
