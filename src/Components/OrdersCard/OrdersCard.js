import React from 'react';
import { Avatar, Typography } from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";

const OrdersCard = (props) => {
  const{deletCard,product} = props
    const {name,img,price,quantity,seller,}=product
    const imgUrl = `product-picture/${img}.jpg`
    
    return (
        

     
       <div className="flex items-center  gap-4 w-3/4 justify-between hover:bg-green-600 bg-green-400 p-2 rounded-xl border-2 border-white hover:border-red-500">
         <div className="flex items-center gap-4">
         <Avatar className='border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30' src={imgUrl} alt="avatar" variant="rounded" size='xxl'/>
         <div>
           <Typography variant="h6" className='md:text-3xl text-white hover:text-yellow-500 '>{name}</Typography>
           <Typography variant="small" color="gray" className="md:text-2xl font-normal">
             Price :{price}
           </Typography>
           <Typography variant="small" color="gray" className="font-normal md:text-2xl">
             Quantity:{quantity}
           </Typography>
         </div>
         </div>
         <button onClick={()=>deletCard(product)} className='hover:border-red-900 border-4 hover:bg-red-500 rounded-full'><MdDeleteOutline className='md:size-14 size-10 text-red-900 hover:text-white hover:md:size-16  'color='' ></MdDeleteOutline></button>
       </div>
    
        
    );
};

export default OrdersCard;