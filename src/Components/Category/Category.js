import React from 'react';

const Category = (props) => {
    const {Category,} =props.products;
    console.log(props.products)
    
    return (
        <div>
            <h1>this is category</h1>
        </div>
    );
};

export default Category;