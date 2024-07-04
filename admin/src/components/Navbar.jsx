import React from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaGlobe, FaUser, FaBell } from "react-icons/fa";

const Navbar = ({ handleNavbarClose }) => {
  return (
    <div className='flex justify-between p-4 shadow-lg fixed top-0  w-full bg-white z-50   h-16'>
      <div className='flex space-x-6 '>
        <span className='text-2xl mt-1 cursor-pointer' onClick={handleNavbarClose}>
          <FaBarsStaggered />
        </span>
        <div className='flex space-x-2'>
          <span className='mt-1 text-[20px]'><FaGlobe /></span>
          <p className='mt-1 text-md font-semibold '>Browse Website</p>
        </div>
      </div>
      <div className='flex space-x-4 mr-4'>
        <input type="search" placeholder='Search anything' className='focus:outline-none px-2 py-1 rounded-md border border-gray-300 hidden md:block' />
        <div className='flex space-x-4 mt-2 font-semibold text-md cursor-pointer'>
          <FaBell />
          <FaUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
