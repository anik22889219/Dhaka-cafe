import React, { useState } from 'react';
import Links from '../Links/Links';
import menu from '../../icon/menu-2-outline 1.svg'
import closer from '../../icon/close.svg'
import Dhakacaffe from '../../icon/dhaka.png'
import { Link, NavLink } from 'react-router-dom';
import Products from '../Products/Products';



const Navber = () => {
    const [open,setOpen] = useState(false)
    const route =[
        {id :1 , name : 'Home', link :'/'},
        {id :2 , name : 'products', link :'/products'},
        {id :3 , name : 'About Us', link :'/aboutUs'},
        {id :4 , name : 'Contact Us', link :'/contactUs'}
    ]
    return (
        <nav className='flex justify-between items-center px-5 bg-green-500 md:py-5 py-3 text-white font-semibold '>
            <div className=' flex-wrap w-52'>
                <img className='' src={Dhakacaffe} alt="Dhaka-caffe" />
            </div>
            {/* <NavLink to={'/'}>home</NavLink> */}
            
            <ul className={` md:flex md:justify-end justify-between absolute md:static w-full duration-0 ease-in  bg-green-500 py-2 ${open ? 'top-14 flex justify-around right-0 ':'top-[-120px] right-0 flex justify-around'}`}>
                <li className='pe-6 text-center'><Link to="/">Home</Link></li>
                <li className='pe-6 text-center'><Link to="/products">Products</Link></li>
                <li className='pe-6 text-center'><Link to="/aboutUs">About Us</Link></li>
                <li className='pe-6 text-center'><Link to="/contactUs">Contact Us</Link></li>
                {/* <li><Link to="/products">Products</Link></li> */}
                {
                    // route.map(item => <Links key={item.id} route ={item}></Links>)
                }
            
            </ul>
            <div onClick={()=> setOpen(!open)} className='h-6 w-6 md:hidden'>
                { open ? <img src={closer} alt="" srcset="" /> :
                <img src={menu} alt="" srcset="" />}
            </div>
        </nav>
    );
};

export default Navber;