import React, { useState } from 'react'
import { Redirect } from "react-router-dom";

function LoginForm({ setUser }) {

  const [loginName, setLoginName] = useState("");
  const [redirectLoginPage, setRedirectLoginPage] = useState("")

  function handleLoginSubmit(e) {
    e.preventDefault();
    console.log('success');

    // post request //login
    // response -> save user to state
    fetch(`${process.env.REACT_APP_RAILS_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: loginName}),
    })
      .then(response => response.json())
      .then(user => {
        setUser(user)
        setRedirectLoginPage(<Redirect to="/SnackContainer" />) 
      })
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <input type="text" name="name" placeholder="Name" value={loginName} onChange={e => setLoginName(e.target.value)} />
        <button type="submit">Login</button>
        {redirectLoginPage}
      </form>
    </div>
  );
}

export default LoginForm;