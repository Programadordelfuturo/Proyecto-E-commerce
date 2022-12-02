import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './Cart';

const Navbar = () => {


  return (
      <nav className='Navbar'>
        <Link to='/'>E-commerce</Link>
        <div>
          <ul>
            <Link to='/login'>Usuario</Link>
            <Link to='/purchases'>Purchases</Link>
            <Link ><Car/></Link>
          </ul>
          
        </div>
      </nav>
  );
};

export default Navbar;