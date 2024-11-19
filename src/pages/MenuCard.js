import React from 'react';
import './styles/MenuCard.css';

function MenuCard({ item, addToCart }) {
  const { id, name, description, price, image } = item;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-image" />
      <div className="menu-card-content">
        <h3 className="menu-card-title">{name}</h3>
        <p className="menu-card-description">{description}</p>
        <p className="menu-card-price">${price.toFixed(2)}</p>
        <button className="menu-card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
