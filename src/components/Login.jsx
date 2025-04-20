import React from 'react'
import { useState } from 'react'


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMessage('El password debe ser al menos 6 caracteres');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Felicitaciones, has ingresado');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h3>Ingresa tus credenciales para iniciar sesión. Si no has creado cuenta por favor registrate</h3>
      <h4>Email</h4>
      <input id="email" type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <h4>Password</h4>
      <input id="password" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
      <div className="card-buttons" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} onClick={handleSubmit}>Enviar</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}
