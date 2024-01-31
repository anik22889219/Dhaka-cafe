import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Card = (props) => {
    const {addTocard}=props;
    const {name,img,price,quantity,seller,}=props.product
    const imgUrl = `product-picture/${img}.jpg`

    // console.log(imgUrl)
    return (
        <div className='w-[300px]  bg-green-400 flex items-center flex-col justify-between   rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-green-600 duration-300  '>
            <div className='p-3'>
            <div className='flex-wrap '>
                <img className='rounded-xl' src={imgUrl} alt="" />
                {/* <img src={pic} alt="" /> */}
            </div>
            <div className='text-center'>
            <h1 className='uppercase mt-6 b-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-yellow-500'>{name}</h1>
            <h1 className='font-normal text-gray-700 dark:text-gray-400 hover:text-yellow-500'>Price: ৳{price}</h1>
            <p className='font-normal text-gray-700 dark:text-gray-400 hover:text-yellow-500'>Seller: {seller}</p>
            </div>
            </div>
            <button onClick={()=>addTocard(props.product)} className=' flex justify-center items-center bg-red-400 rounded-b-2xl w-full text-white py-3 hover:bg-red-600'>Add to Card <FaCartShopping className='ms-1'></FaCartShopping></button>
        </div>
    );
};

export default Card;