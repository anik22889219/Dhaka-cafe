import React from 'react';
import Products from '../Products/Products';
import Midia from '../Midia/Midia';
import UncontrolledExample from '../Midia/Midia';



const Home = () => {
    return (
        <div>
            <h1>I am Home</h1>
            <UncontrolledExample></UncontrolledExample>
            <Products></Products>
        </div>
    );
};

export default Home;