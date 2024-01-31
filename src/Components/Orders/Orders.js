import React from "react";


const Orders = (props) => {
  const { products,children } = props;
  let TotelPrice = 0;
  let TotalShippingCharg = 0;
  let quantity = 0;
  for (const product of products) {
    quantity = quantity + product.quantity;
    TotelPrice = TotelPrice + product.price * product.quantity;
    TotalShippingCharg = TotalShippingCharg + product.shipping;
  }
  let Taxt = parseFloat((TotelPrice * 0.1).toFixed(2));
  let GrendTotal = TotelPrice + TotalShippingCharg + Taxt;
  // console.log(card)
  return (
    <div className="bg-green-500 w-full   py-4  sticky top-12 z-0 rounded-2xl ">
      <div>
        <h3 className="text-center  text-2xl text-white font-bold  hover:text-yellow-500">
          Oder Summary
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-y-4 justify-items-center md:block">
        <p className="text-xl font-normal md:mt-6 text-white md:ms-5   hover:text-yellow-500">
          Selected Items: {quantity}
        </p>
        <p className="text-xl font-normal md:mt-6 text-white md:ms-5   hover:text-yellow-500">
          Totel Price:${TotelPrice}
        </p>
        <p className="text-xl font-normal md:mt-6 text-white md:ms-5   hover:text-yellow-500">
          Total Shoping Charge:${TotalShippingCharg}
        </p>
        <p className="text-xl font-normal md:mt-6 text-white md:ms-5   hover:text-yellow-500">
          Taxt:${Taxt}
        </p>
      </div>
      <div>
        <h4 className="text-center pt-4 text-2xl text-white font-bold hover:text-2xl hover:text-yellow-500">
          Grand Total:${GrendTotal}
        </h4>
      </div>
      <div className="my-10 ">
        {children}
      </div>
    </div>
  );
};

export default Orders;
