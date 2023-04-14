import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='text-center mt-10'>
      <h3 className='font-bold text-2xl mb-3'>Error Occoured</h3>
      <p className='text-xl text-red-600'>{error.message}</p>
    </div>
  );
};

export default ErrorPage;