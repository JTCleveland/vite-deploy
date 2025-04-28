import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';
import Cart from './Cart';

function Home() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = useCallback((pizza) => {
    const existingPizza = cart.find((item) => item.name === pizza.name);
    if (existingPizza) {
      const newCart = cart.map((item) => {
        if (item.name === pizza.name) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  }, [cart, setCart]);

  const handleRemoveFromCart = useCallback((pizza) => {
    const newCart = cart.map((item) => {
      if (item.name === pizza.name) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    }).filter((item) => item.count > 0 || item.name !== pizza.name);
    setCart(newCart);
  }, [cart, setCart]);

  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onClick={handleAddToCart}
          />
        ))}
      </div>
      <Cart
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default Home;