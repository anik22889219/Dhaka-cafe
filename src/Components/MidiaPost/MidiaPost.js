import React from 'react';

const MidiaPost = (props) => {
    const{img} = props.product;
    const imgUrl = `product-picture/${img}.jpg`
    return (
        <div>
            <img src={imgUrl} alt="" className='h-[455px] w-full object-cover'
        />
        </div>
    );
};

export default MidiaPost;