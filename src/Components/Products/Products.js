import React, { useEffect, useState } from 'react';
import data from '../../data/product.json'
import Card from '../Card/Card';

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    console.log(products)
    return (
        <div className='mx-5'>
            <h1 className='mt-6 b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-start'>All Products</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-8'>
            {
                products.map(product =><Card
                key={product.id}
                product ={product}></Card> )
            }
            </div>
        </div>
    );
};

export default Products;