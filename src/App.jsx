import { useState } from 'react'
import './App.css'

import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [activeComponent, setActiveComponent] = useState('Home');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <div className="navbar">
        <Navbar onComponentChange={handleComponentChange} />
      </div>
      {activeComponent === 'Home' && <Home />}
      {activeComponent === 'Login' && <Login />}
      {activeComponent === 'Register' && <Register />}
      <Footer />
    </div>
  );
}

export default App;