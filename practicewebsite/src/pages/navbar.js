// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/login');
      };

  return (
    <>
    <nav className= {styles.navbar}>
        <div className='container3'>
      <ul>
        <li>
          <Link className='link' href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className='link' href="/Designs">
            Color Analysis
          </Link>
        </li>
        <li>
          <Link className='link' href="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className='link' href="/About">
            About
          </Link>
        </li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
    </nav>


    <nav className= {styles.navbar2}>
    <div className='container4'>
  <ul>
    
    <li>
        <div className='link2'>
            Email: <a href="mailto:taibahanif275@gmail.com">taibahanif275@gmail.com</a>
        </div>
    </li>
    <li>
        <div className='link2'>
            Email: <a href="mailto:tashifamurtaza987@gmail.com">tashifamurtaza987@gmail.com</a>
        </div>
    </li>
    <li>
        <div className='link2'>
            Whatsapp: ###########
        </div>
    </li>
    <li className='image'>
    <a href="mailto:your-email@gmail.com" >
      <Image
       src="/gmailicon.png"
       alt="Gmail" className="icon" 
        width= {40} 
        height= {40}/>
    </a>
    </li>
    <li className='image'>
    <a href="https://www.facebook.com/" >
      <Image
       src="/facebookicon.png" 
       alt="Facebook" 
       className="icon"
        width= {40} 
        height= {40}/>
        </a>
    </li>
    <li className='image'>
    <a href="https://www.instagram.com/">
      <Image
       src="/instaicon.png" 
       alt="Instagram" 
       className="icon"
        width= {40} 
        height= {40}/>
        </a>
    </li>
  </ul>
</div>
</nav>
</>
  );
};

export default Navbar;
