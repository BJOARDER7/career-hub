import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className='md:flex justify-between items-center'>
      <h4 className='text-3xl font-bold'>BuiltCareer</h4>
      <div className='flex flex-col md:flex md:flex-row justify-between md:gap-5'>
      <Link to="/statistics">Statistics</Link>
      <Link to="/jobs">Applied Job</Link>
      <Link to="/blog">Blog</Link>
      </div>
      <button className='bg-purple-800 text-white p-2 rounded mt-2'>Start Applying</button>
    </nav>
    
  );
};

export default Navbar;