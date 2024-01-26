import React from 'react';

const Orders = (props) => {
    const {products} =props
    let TotelPrice = 0;
    let TotalShippingCharg =0 ;
    let quantity = 0 ; 
    for(const product of products){
        quantity = quantity + product.quantity
        TotelPrice =TotelPrice + product.price*product.quantity;
        TotalShippingCharg = TotalShippingCharg +product.shipping
    }
   let Taxt = parseFloat((TotelPrice*0.1).toFixed(2))
   let GrendTotal = TotelPrice + TotalShippingCharg + Taxt
    // console.log(card)
    return (
        <div className='mt-6 relative'>
            <div className='bg-red-600  max-w-[360px]  p-4 sticky top-0 '> 
            <h1>Order Summary</h1>
            <p>selected Item :{quantity}</p>
            </div>
        </div>
    );
};

export default Orders;