import React from 'react';
import useProducts from '../../hooks/useProducts';
import MiniCofe from '../../category-img/mini_coffee-category.png'
import Coffee from '../../category-img/coffee-category.png'
import Tea from '../../category-img/Tea-category.png'
const Category = (props) => {
    const {Category,} =props.products;
    // console.log(props.products)
    const [products,setProducts] = useProducts()
    const miniCafe = 'Mini Coffee'
    const miniCafes = products.filter(product => product.category===miniCafe);
    const coffee = 'Coffee'
    const coffees = products.filter(product => product.category===coffee);
    const tea = 'Mini Coffee'
    const teas = products.filter(product => product.category===tea);
    // console.log(miniCafes,coffees,teas);
    
    return (
        <div>
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 justify-center'>
                <li className='w-[350px] h-[120px] bg-orange-400 items-center flex justify-between px-7 rounded-3xl mx-auto'>
                    <h1 className='b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-start'>Mini coffee</h1>
                    <img className=' h-[120px] w-[120px] rounded-2xl' src={MiniCofe} alt="" />
             </li>
                <li className='w-[350px] h-[120px] bg-pink-400 items-center flex justify-between px-7 rounded-3xl mx-auto'>
                    <h1 className='b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-start'>Coffee</h1>
                    <img className=' h-[120px] w-[120px] rounded-2xl' src={Coffee} alt="" />
             </li>
                <li className='w-[350px] h-[120px] bg-blue-400 items-center flex justify-between px-7 rounded-3xl mx-auto'>
                    <h1 className='b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-start'>Tea</h1>
                    <img className=' h-[120px] w-[120px] rounded-2xl' src={Tea} alt="" />
             </li>
                
            </ul>
        </div>
    );
};

export default Category;