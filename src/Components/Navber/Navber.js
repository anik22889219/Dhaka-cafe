import React, { useState } from 'react';
import menu from '../../icon/menu-2-outline 1.svg'
import closer from '../../icon/close.svg'
import Dhakacaffe from '../../icon/dhaka.png'
import { Link} from 'react-router-dom';
import { Avatar, Button, Typography } from '@material-tailwind/react';




const Navber = ({hendelSingin,user,hendelSingout}) => {
    const [open,setOpen] = useState(false)

  
    return (
        <nav className='flex justify-between items-center px-5 bg-green-500  py-2 text-white font-semibold  rounded-t-xl '>
            <div className=' flex-wrap w-52'>
                <img className='' src={Dhakacaffe} alt="Dhaka-caffe" />
            </div>
            
            
            <ul className={` md:flex md:justify-end  absolute md:static   bg-green-500 py-2 ${open ? 'top-16  flex  flex-col md:flex-row w-1/2 h-[850px] md:h-auto justify-items-start items-center  right-0 rounded-lg   ':'top-[-120px] right-0 flex  justify-around items-center'}`}>
                <li onClick={()=> setOpen(!open)} className='pe-6 md:text-center mx-auto mb-10 md:mx-0 md:mb-0 hover:text-yellow-500'><Link to="/">Home</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 md:text-center mx-auto mb-10 md:mx-0 md:mb-0 hover:text-yellow-500'><Link to="/products">Products</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 md:text-center mx-auto mb-10 md:mx-0 md:mb-0 hover:text-yellow-500'><Link to="/orders">Orders</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 md:text-center mx-auto mb-10 md:mx-0 md:mb-0 hover:text-yellow-500'><Link to="/aboutUs">About Us</Link></li>
                <li onClick={()=> setOpen(!open)} className='pe-6 md:text-center mx-auto mb-10 md:mx-0 md:mb-0 hover:text-yellow-500'><Link to="/contactUs">Contact Us</Link></li>
                {user.uid ?
                <div className='flex items-center gap-3'>
                    <div className="flex items-center gap-4">
        <Avatar src={user.photoURL} alt="avatar" />
        <div>
          <Typography variant="h6">{user.displayName}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {user.email}
          </Typography>
        </div>
      </div>
                <li><Button onClick={hendelSingout} className='bg-red-600 b '>Sign-out</Button></li>
                
                </div>
                       
                :
                <li><Button onClick={hendelSingin} className='bg-red-600 b '>Sign-in</Button></li>
                
                
                
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