import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/error.scss';
const Error = () => {
  return (
    <div class='error'>
      <div className='error-center'>
        <h1>404</h1>
        <h3>The page is not found.</h3>
        <Link to='/' className='btn error-btn'>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
