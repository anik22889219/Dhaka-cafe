import React from 'react';
import { Link } from 'react-router-dom';


const Links = (props) => {
    const {link,name}= props.route
    return (
        <div className='pe-6 text-center'>
            <li><a href={link}>{name}</a></li>
            {/* <Link to={link} >{name}</Link> */}
            {/* <li><Link to={link}>{name}</Link></li> */}
        </div>
        
    );
};

export default Links;