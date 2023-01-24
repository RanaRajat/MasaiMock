import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <div className='navdiv'>
    <div>
    <NavLink to='/'>Home</NavLink>
    </div>
    <div>
    <NavLink to='bookmarks'>BookMarks</NavLink>
    </div>
    <div>
    <NavLink to='about'>About</NavLink>
    </div>
    </div>
    </>
  )
}

export default Navbar