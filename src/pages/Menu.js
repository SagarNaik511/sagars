import React from 'react';
import MenuCard from './MenuCard';
import './styles/Menu.css';

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "A classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
      price: 12.99,
      image: 'food-website/public/images/pizza.webp',
    },
    {
      id: 2,
      name: "Grilled Chicken",
      description: "Juicy grilled chicken served with roasted veggies and herb seasoning.",
      price: 15.49,
      image: 'food-website/public/images/chiki.jpg',
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description: "Rich chocolate cake topped with a velvety chocolate ganache.",
      price: 6.99,
      image: 'food-website/public/images/cake.webp',
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan, croutons, and Caesar dressing.",
      price: 8.99,
      image: 'food-website/public/images/salad.jpg',
    },
  ];

  return (
    <div className="menu">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;



