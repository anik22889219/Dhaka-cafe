import React from 'react';
import Navber from '../Navber/Navber';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 z-10 '>
            <Navber></Navber>
        </div>
    );
};

export default Header;