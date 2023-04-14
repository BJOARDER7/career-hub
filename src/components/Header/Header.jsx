import React from 'react';
import photo from '../../assets/Photo.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className='grid grid-cols-1 md:grid-cols-2 my-5'>
      <div className='pr-6'>
        <h2><span className='text-2xl font-bold'>Better Job Placement <br /> to Built your <br /></span> <span className='text-purple-800 text-3xl font-bold'>Dream Job</span></h2>
        <p className='my-4'>A resume is not a legal document, so you don’t need to worry about making small adjustments to professional titles under special circumstances. You want your titles to jump off the page at recruiters, helping you get invited for an interview.</p>
        <button className='bg-purple-800 text-white p-2 rounded'>Get Started</button>
      </div>
      <div className='header-img mt-4'>
        <img className='object-cover w-full h-56 md:h-72' src={photo} alt="Header photo" />
      </div>
    </header>
  );
};

export default Header;

