import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <nav className='Navbar'>
        <Link to='/'>E-commerce</Link>
        <ul>
          <Link to='/login'>Usuario</Link>
          <Link to='/purchases'>Purchases</Link>
          <Link to='/product/:id'>Car</Link>
        </ul>
      </nav>      
    </div>
  );
};

export default Navbar;