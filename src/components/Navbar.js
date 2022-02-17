import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <h3 className='logo'>FEEDBACK</h3>
        <ul className='nav-links'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
