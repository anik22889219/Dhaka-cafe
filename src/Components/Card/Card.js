import React from 'react';
import arrow from '../../icon/arrow-right.svg'

const Card = (props) => {
    const {addTocard}=props;
    const {name,img,price,quantity,seller,}=props.product
    const imgUrl = `product-picture/${img}.jpg`

    // console.log(imgUrl)
    return (
        <div className='w-[360px]  bg-green-400 flex items-center flex-col justify-around mx-auto p-3  rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-green-600 duration-300  '>
            <div>
            <div className='flex-wrap '>
                <img className='rounded-xl' src={imgUrl} alt="" />
                {/* <img src={pic} alt="" /> */}
            </div>
            <div className='text-center'>
            <h1 className='uppercase mt-6 b-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{name}</h1>
            <h1 className='font-normal text-gray-700 dark:text-gray-400'>Price: ৳{price}</h1>
            <p className='font-normal text-gray-700 dark:text-gray-400'>Seller: {seller}</p>
            </div>
            </div>
            <div className='mt-7'>
                <button onClick={()=>addTocard(props.product)} className='flex justify-around items-center bg-red-400 rounded-3xl px-7 py-2 hover:bg-red-600'>Buy now <span className='ms-1'><img src={arrow} alt="" /></span></button>
            </div>
        </div>
    );
};

export default Card;