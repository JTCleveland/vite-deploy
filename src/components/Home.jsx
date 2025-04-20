import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';

function Home() {
    return (
      <div>
        <Header />
      <div className="card-container">
      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img={pizza1}
        />

       <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img={pizza2}
        />

       <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img={pizza3}
/>
      </div>
      </div>
    );
  }
  
  export default Home;