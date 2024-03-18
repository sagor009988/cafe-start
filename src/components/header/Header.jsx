import React from 'react';
import image from '../../../public/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2'>
            <h1 className='text-5xl font-semibold'>Knowledge cafe</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Header;