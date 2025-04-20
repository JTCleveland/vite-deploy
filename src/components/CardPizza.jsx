import React from 'react';

function CardPizza(props) {
    return (
      <div className="card-pizza">
        <img src={props.img} alt={props.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <div className="card-info">
          <h2>{props.name}</h2>
          <p>Price: ${props.price}</p>
          <p>Ingredients: {props.ingredients.join(', ')}</p>
        </div>
      </div>
    );
  }


export default CardPizza;