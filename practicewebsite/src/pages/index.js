// pages/genre.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from './navbar'


const GenrePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve user data from sessionStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Redirect to login if user data is not available
    if (!storedUsername || !storedPassword) {
      router.push('/login');
    }
    else{
      setUsername(storedUsername);
    }
  }, []);


  return (
    <>
    <Navbar />
    
    <div className='container2'>
    <div className="content">
      <h1>Welcome {username}!</h1>
      <h1>COLOR ANALYSIS WEBSITE</h1>
      <p>In order to do your personal color analysis.<br/>
        Click Below
      </p>
        <Link href="/Designs">
            <button className='button2'> COLOR ANALYSIS</button>
        </Link>
    </div>
    </div>
  </>
  );
};

export default GenrePage;
