import React from 'react';
import Products from '../Products/Products';
import UncontrolledExample from '../Midia/Midia';
import useProducts from '../../hooks/useProducts';
import Category from "../Category/Category";




const Home = () => {
    const [products,setProducts] =useProducts();
    return (
        <div className='mt-5 '>
            <UncontrolledExample></UncontrolledExample>
            <Category  key={products.id} products={products}></Category>
            <Products></Products>
        </div>
    );
};

export default Home;