import React from 'react';

function Cart({ cart, handleAddToCart, handleRemoveFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul className="cart-list">
  {cart.map((item) => (
    <li key={item.id || `cart-item-${item.name}`} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <span className="cart-name">{item.name}</span>
              <span className="cart-price">${item.price}</span>
              <span className="cart-quantity">x {item.count}</span>
              <button onClick={() => handleAddToCart(item)}>+</button>
              <button onClick={() => handleRemoveFromCart(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button className="buy-button">BUY</button>
    </div>
  );
}

export default Cart;