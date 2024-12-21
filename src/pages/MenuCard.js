import React from 'react';
import './styles/MenuCard.css';

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-image" />
      <h3 className="menu-card-title">{item.name}</h3>
      <p className="menu-card-description">{item.description}</p>
      <p className="menu-card-price">₹{item.price}</p>
    </div>
  );
}


export default MenuCard;
