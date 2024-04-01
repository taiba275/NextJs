// pages/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Store user data in sessionStorage upon successful sign-up
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect user to the appropriate genre page
    router.push('/login');
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    
    <div className='container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button onClick={handleLoginRedirect}>Log In</button></p>
    </div>
  );
};

export default SignUp;
