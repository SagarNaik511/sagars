import React, { useState } from 'react';
import './styles/CustomizeOrder.css';

function CustomizeOrder() {
  const [orderDetails, setOrderDetails] = useState({
    itemName: "Margherita Pizza",
    basePrice: 10.99,
    size: "Medium",
    toppings: [],
    addOns: [],
    quantity: 1,
  });

  const availableToppings = ["Basil", "Olives", "Tomato", "Mushrooms"];
  const availableAddOns = ["Extra Cheese", "Garlic Bread", "Soft Drink"];

  const handleSizeChange = (e) => {
    setOrderDetails({ ...orderDetails, size: e.target.value });
  };

  const handleToppingChange = (topping) => {
    setOrderDetails((prevState) => {
      const newToppings = prevState.toppings.includes(topping)
        ? prevState.toppings.filter((t) => t !== topping)
        : [...prevState.toppings, topping];
      return { ...prevState, toppings: newToppings };
    });
  };

  const handleAddOnChange = (addOn) => {
    setOrderDetails((prevState) => {
      const newAddOns = prevState.addOns.includes(addOn)
        ? prevState.addOns.filter((a) => a !== addOn)
        : [...prevState.addOns, addOn];
      return { ...prevState, addOns: newAddOns };
    });
  };

  const calculateTotalPrice = () => {
    let total = orderDetails.basePrice;
    if (orderDetails.size === "Large") total += 2.00;
    if (orderDetails.toppings.length > 0) total += orderDetails.toppings.length * 1.50;
    if (orderDetails.addOns.length > 0) total += orderDetails.addOns.length * 2.00;
    return total * orderDetails.quantity;
  };

  const handleAddToCart = () => {
    console.log("Adding to cart:", orderDetails);
  };

  return (
    <div className="customize-order-page">
      <h1>Customize Your Order</h1>
      <div className="order-details">
        <h2>{orderDetails.itemName}</h2>
        <p>Base Price: ${orderDetails.basePrice.toFixed(2)}</p>

        <div className="customization-option">
          <h3>Choose Size</h3>
          <select value={orderDetails.size} onChange={handleSizeChange}>
            <option value="Medium">Medium</option>
            <option value="Large">Large (+$2.00)</option>
          </select>
        </div>

        <div className="customization-option">
          <h3>Choose Toppings</h3>
          {availableToppings.map((topping, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={orderDetails.toppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          ))}
        </div>

        <div className="customization-option">
          <h3>Choose Add-Ons</h3>
          {availableAddOns.map((addOn, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={orderDetails.addOns.includes(addOn)}
                onChange={() => handleAddOnChange(addOn)}
              />
              {addOn}
            </label>
          ))}
        </div>

        <div className="customization-option">
          <h3>Quantity</h3>
          <input
            type="number"
            min="1"
            value={orderDetails.quantity}
            onChange={(e) => setOrderDetails({ ...orderDetails, quantity: parseInt(e.target.value) })}
          />
        </div>

        <div className="order-summary">
          <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CustomizeOrder;
