import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const links= <>
        <Link to='/'><button className='px-4 py-2 rounded-lg border-2 border-green-400 text-green-500 font-semibold'>Home</button></Link>
        <Link to='/about'><li className='m-2'>About</li></Link>
        <li className='m-2'>Pages to read</li>

    </>
    return (
        <div className="navbar text-black mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 text-white mr-5 border-none">Sign in</a>
    <a className="btn bg-cyan-400 text-whit border-none">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;