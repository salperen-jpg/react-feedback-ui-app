import React from 'react';
import '../Styles/about.scss';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='about'>
      <div className='about-center'>
        <h3>
          This project has been implemented by <span>Salih Alperen.</span>
        </h3>
        <Link to='/' className='btn about-btn'>
          Go to use
        </Link>
      </div>
    </div>
  );
};

export default About;
