import React from 'react';
import Navber from '../Navber/Navber';


const Header = ({hendelSingin,user,hendelSingout}) => {
    // console.log(user)

    return (
        <div className='sticky top-0 z-10 '>
            <Navber></Navber>
        </div>
    );
};

export default Header;