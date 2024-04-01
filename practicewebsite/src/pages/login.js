// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() === '') {
      alert('Please enter your username.');
      return;
    }
    else if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }
    else if (username.trim() === '' || password.trim() === '') {
      alert('Please enter your username and password.');
      return;
    }

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername === username || storedPassword === password) {
      router.push('/');
    } else {
      alert("User not found.")
    }
  };

  const handleSignUpRedirect = () => {
    router.push('/Signup');
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={handleSignUpRedirect}>Sign Up</button></p>
    </div>
  );
};

export default Login;
