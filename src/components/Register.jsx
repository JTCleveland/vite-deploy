import React from 'react'
import { useState } from 'react'


export default function Login() {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email !== confirmEmail) {
        setErrorMessage('Emails no son iguales');
        setSuccessMessage('');
      } else if (password.length < 6) {
        setErrorMessage('El password debe ser al menos 6 caracteres');
        setSuccessMessage('');
      } else {
        setErrorMessage('');
        setSuccessMessage('Felicitaciones, ahora estas registrado');
      }
    };
  
    return (
      <div>
        <h1>Registrar</h1>
        <h4>Email</h4>
        <input id="email" type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h4>Confirmar Email</h4>
        <input id="confirmEmail" type="text" placeholder="Enter your Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
        <h4>Password (al menos 6 caracteres)</h4>
        <input id="password" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
        <div className="card-buttons" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} onClick={handleSubmit}>Enviar</button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    );
  }