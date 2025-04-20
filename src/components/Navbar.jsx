import React, { useState } from 'react';

export default function Navbar(props) {
  const [token, setToken] = useState(null);

  const handleLogin = () => {
    setToken('logged_in');
    props.onComponentChange('Login');
  };

  const handleRegister = () => {
    props.onComponentChange('Register');
  };

  const handleLogout = () => {
    setToken(null);
  };

  const handleHome = () => {
    props.onComponentChange('Home');
  };

  return (
    <nav className="navbar container">
      <div className="nav-left">
        <ul>
          <li>
            <a href="#" onClick={handleHome}>
              Home
            </a>
          </li>
          {token ? (
            <>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#" onClick={handleLogin}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" onClick={handleRegister}>
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <span>Total: $25,000</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}