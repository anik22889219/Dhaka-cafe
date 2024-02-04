import React from 'react';
import useProducts from '../../hooks/useProducts';
import useLocalstorage from '../../hooks/useLocalstorage';
import Orders from '../Orders/Orders';
import OrdersCard from '../OrdersCard/OrdersCard';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';

const OrdersReview = () => {
    const [products,setProducts] = useProducts()
    const [card,setCard] = useLocalstorage(products)
    // console.log(card);
    const deletCard = (product)=>{
        const rest = card.filter(pd=>pd.id !==product.id);
        setCard(rest)
        removeFromDb(product.id)
    } 
    

    return (
        <div className='sm:ms-5 grid lg:grid-cols-5 md:grid-cols-3 justify-items-center my-6  mx-3'>
        <div className='col-span-1 lg:col-span-4 md:col-span-2 w-full'>
        <h1 className=' b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-start text-center'>All Selected Products</h1>
         <div className='flex flex-col items-center gap-5 my-8'>
         {
             card.map(product =><OrdersCard key={product.id}
             product ={product}
             deletCard= {deletCard}
             ></OrdersCard>)
         }
         </div>
         {card.length===0 && <h1 className=' b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white  text-center my-auto uppercase'>please select an item</h1> }
        </div>
        <div className='col-span-1 '>
          
         <Orders products={card}>
         <Link to="/products">
          <Button onClick={deleteShoppingCart} 
            className="flex justify-between items-center text-xl mx-auto "
            color="red"
          >
            Remove All{" "}
            <MdDeleteOutline className="size-7 text-black ms-2 "></MdDeleteOutline>
          </Button>
          </Link>
         </Orders>
        </div>
     </div>
    );
};

export default OrdersReview;