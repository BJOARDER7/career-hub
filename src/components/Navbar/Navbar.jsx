import React from 'react';

const Navbar = () => {
  return (

    <nav className='md:flex justify-between items-center'>
      <h4 className='text-2xl font-bold'>BuiltCareer</h4>
      <div className='flex flex-col md:flex md:flex-row justify-between md:gap-5'>
      <a href="/statistics">Statistics</a>
      <a href="/appliedJob">Applied Job</a>
      <a href="/blog">Blog</a>
      </div>
      <button className='bg-purple-800 text-white p-2 rounded mt-2'>Start Applying</button>
    </nav>
    
  );
};

export default Navbar;