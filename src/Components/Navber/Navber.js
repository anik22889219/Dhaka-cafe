import React, { useState } from 'react';
import menu from '../../icon/menu-2-outline 1.svg'
import closer from '../../icon/close.svg'
import Dhakacaffe from '../../icon/dhaka.png'
import { Link, NavLink } from 'react-router-dom';




const Navber = () => {
    const [open,setOpen] = useState(false)
  
    return (
        <nav className='flex justify-between items-center px-5 bg-green-500  py-2 text-white font-semibold  rounded-t-xl '>
            <div className=' flex-wrap w-52'>
                <img className='' src={Dhakacaffe} alt="Dhaka-caffe" />
            </div>
            
            
            <ul className={` md:flex md:justify-end justify-between absolute md:static w-full duration-0 ease-in  bg-green-500 py-2 ${open ? 'top-14 flex justify-around right-0 ':'top-[-120px] right-0 flex justify-around'}`}>
                <li onClick={()=> setOpen(!open)} className='pe-6 text-center hover:text-yellow-500'><Link to="/">Home</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 text-center hover:text-yellow-500'><Link to="/products">Products</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 text-center hover:text-yellow-500'><Link to="/aboutUs">About Us</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 text-center hover:text-yellow-500'><Link to="/contactUs">Contact Us</Link></li>
                
            
            </ul>
            <div onClick={()=> setOpen(!open)} className='h-6 w-6 md:hidden'>
                { open ? <img src={closer} alt="" srcset="" /> :
                <img src={menu} alt="" srcset="" />}
            </div>
        </nav>
    );
};

export default Navber;