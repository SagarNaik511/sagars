import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import './styles/Cart.css';

function Cart() {
  const exchangeRate = 83; // 1 USD = 83 INR (adjust this value based on the latest rate)

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "A classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
      price: 5.29, // price in USD
      quantity: 1,
      image: '/images/pizza.webp',
    },
    {
      id: 2,
      name: "Grilled Chicken",
      description: "Juicy grilled chicken served with roasted veggies and herb seasoning.",
      price: 5.88, // price in USD
      quantity: 1,
      image: '/images/chiki.jpg',
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description: "Rich chocolate cake topped with a velvety chocolate ganache.",
      price: 7 , // price in USD
      quantity: 1,
      image: '/images/cake.webp',
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with parmesan, croutons, and Caesar dressing.",
      price: 2, // price in USD
      quantity: 1,
      image: '/images/salad.jpg',
    },
    {
      id: 5,
      name: "Pasta",
      description: "Pasta is a versatile Italian dish made from wheat dough, typically served with a variety of sauces, meats, and vegetables.",
      price:3 , // price in USD
      quantity: 1,
      image: '/images/pasta.jpg',
    },
    {
      id: 6,
      name: "Biriyani",
      description: "Its just good",
      price: 5, // price in USD
      quantity: 1,
      image: '/images/biri.avif',
    },
  ]);

  // Convert prices to rupees (INR)
  const cartItemsWithRupees = cartItems.map(item => ({
    ...item,
    price: Math.round(item.price * exchangeRate), // Convert price to INR and round to nearest rupee
  }));

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  // Calculate total price in INR
  const totalPrice = cartItemsWithRupees.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItemsWithRupees.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <div className="cart-summary">
            <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
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
