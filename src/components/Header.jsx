import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from "../assets/Logo.png";

const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <nav className="flex justify-between items-center h-24 md:mx-28 bg-none  uppercase ">
        <img  className="hidden md:flex pr-6 h-[68px]" src={Logo}   alt="JAL" />
        <ul className="hidden md:flex">
          <li className="font-bold m-3 p-3 hover:text-red-600 hover:outline cursor-pointer">About</li>
          <li className="font-bold m-3 p-3 hover:text-red-600 hover:outline cursor-pointer">Home</li>
          <li className="font-bold m-3 p-3 hover:text-red-600 hover:outline cursor-pointer">Skills</li>
        </ul>
        <p className="hidden md:flex font-bold m-3 p-3 hover:text-white outline hover:outline-red-600 cursor-pointer" >Contact</p>

      <div onClick={()=>setNav(!nav)} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
      </div>

      <ul className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-400 bg-[#000300] ease-in-out duration-500':'ease-in-out duration-500 fixed left-[-100%]'}>
      <img  className="flex h-[68px] md:hidden m-4" src={Logo} onClick={()=>setNav(false)}  alt="JAL" />
          <li className="font-bold m-3 p-3 hover:text-red-600 cursor-pointer">Home</li>
          <li className="font-bold m-3 p-3 hover:text-red-600 cursor-pointer">About</li>
          <li className="font-bold m-3 p-3 hover:text-red-600 cursor-pointer">Skills</li>
          <li className="font-bold m-3 p-3 hover:text-red-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
