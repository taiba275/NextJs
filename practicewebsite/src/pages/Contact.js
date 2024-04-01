import React from 'react'
import Navbar from './navbar'
import Image from 'next/image';

const Contact = () =>{
return(
<>
    <Navbar />
    <div className='container2'>
        <div className="content">
            <div className="icon-wrapper">
                <div className="icon-container">
                    <a href="https://www.instagram.com/">
                        <Image src="/instaicon.png" alt="Instagram" className="icon" width={40} height={40} />
                    </a>
                    <div className="icon-text">
                        <span>Instagram</span>
                        <p>For more  info ! You can also visit..</p>
                    </div>
                </div>
                <div className="icon-container">
                    <a href="https://www.facebook.com/" >
                        <Image src="/facebookicon.png" alt="Facebook" className="icon" width={40} height={40}/>
                    </a>
                    <div className="icon-text">
                        <span>Facebook</span>
                        <p>our Instagram and our Facebook </p>
                    </div>
                </div>
                <div className="icon-container">
                    <a href="mailto:your-email@gmail.com" >
                        <Image src="/gmailicon.png" alt="Gmail" className="icon" width={40} height={40}/>
                    </a>
                    <div className="icon-text">
                        <span>Gmail</span>
                        <p> page and can email also!!!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
}

export default Contact;