import React from 'react'
import headerImage from '../assets/Header.jpg';

export default function Header() {
  return (
    <h1
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: '#fff',
        fontSize: '36px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      Welcome to Pizzería Mamma Mia!
    </h1>
  );
}
