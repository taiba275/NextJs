import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from './navbar';

const Design = () => {
    const [picture, setPicture] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPicture(reader.result);
                setShowDetails(true);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navbar />
            <div className='container2'>
                <div className="content">
                    <h1>COLOUR ANALYSIS</h1>
                    <p>UPLOAD YOUR IMAGE HERE.</p>
                    <input
                        type='file'
                        accept='image/*'
                        onChange={handlePictureChange}
                        width={30}
                    />
                    {picture && (
                        <Image
                            src={picture}
                            alt="Description of my image"
                            width={300}
                            height={300}
                        />
                    )}
                    {showDetails && (
                        <>
                        <br/>
                        <h4>Eye Color: DarkBrown</h4>
                        <h4> Hair Color: Black</h4>
                        <h4> Skin Color: Fair</h4>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Design;
