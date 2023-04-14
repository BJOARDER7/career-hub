import React from 'react';

const Blog = () => {
  return (
    <div className='mt-10'>
      <h2 className='font-bold'>1. When should you use context api ?</h2>
      <p className='text-justify mx-10'>It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</p>
      <h2 className='font-bold'>2. What is custom hooks ?</h2>
      <p className='text-justify mx-10'>It uses and interact with state in React function components. The former two are used to store data across renders, while the latter is used to execute side effects when that data changes.</p>
      <h2 className='font-bold'>3. What is useRef in react ?</h2>
      <p className='text-justify mx-10'>It is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.</p>
      <h2 className='font-bold'>4. What is useMemo in react ? ?</h2>
      <p className='text-justify mx-10'>useMemo is a hook that is used in the functional component of React that returns a memoized value.</p>
    </div>
  );
};

export default Blog;