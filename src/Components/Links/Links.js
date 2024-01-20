import React from 'react';


const Links = (props) => {
    const {link,name}= props.route
    return (
        <div className='pe-6 text-center'>
            <li><a href={link}>{name}</a></li>
        </div>
        
    );
};

export default Links;