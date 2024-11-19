import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import './styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella and basil",
      price: 10.99,
      quantity: 2,
      image: "/images/margherita.jpg"
    },
    {
      id: 2,
      name: "Caesar Salad",
      description: "Crispy romaine lettuce with creamy Caesar dressing",
      price: 7.49,
      quantity: 1,
      image: "/images/caesar-salad.jpg"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

 
 const removeItem = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty. Add some delicious items to your cart!</p>
      )}
    </div>
  );
}

export default Cart;
