import React from 'react';
import './styles/CartItem.css';

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="cart-item-price">₹{item.price}</p>
        <div className="cart-item-quantity">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
          <input type="number" value={item.quantity} readOnly />
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;

