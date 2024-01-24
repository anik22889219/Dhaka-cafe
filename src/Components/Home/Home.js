import React from 'react';
import Products from '../Products/Products';
import UncontrolledExample from '../Midia/Midia';




const Home = () => {
    return (
        <div className='mt-5'>
            <UncontrolledExample></UncontrolledExample>
            <Products></Products>
        </div>
    );
};

export default Home;