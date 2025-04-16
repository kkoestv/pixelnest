import React, { useState } from "react";
import "./Login.css";


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch ("https://pixelnest-backend-h0bvadfcaxcrfre9.norwayeast-01.azurewebsites.net/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    });

    const result = await response.text();
    setMessage(result);
  }


  return (
    <div className="background-container">
      <div className="login-box">
        <h2>pixel nest</h2>
        <form onSubmit={handleLogin}>
          <input 
          type="text" 
          placeholder="Brukernavn" 
          value= {username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Passord" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Logg inn</button>
        </form>
        <p className="response-message">{message}</p>
      </div>
    </div>
  );
}

export default Login;

