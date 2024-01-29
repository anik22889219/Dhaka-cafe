import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@material-tailwind/react";

const Orders = (props) => {
  const { products } = props;
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
    <div className="bg-green-500 w-full  mt-8 py-4  sticky top-12 z-0 rounded-2xl ">
      <div>
        <h3 className="text-center  text-2xl text-white font-bold  hover:text-red-600">
          Oder Summary
        </h3>
      </div>
      <div className="">
        <p className="text-xl font-normal mt-6 text-white ms-5   hover:text-red-600">
          Selected Items: {quantity}
        </p>
        <p className="text-xl font-normal mt-6 text-white ms-5   hover:text-red-600">
          Totel Price:${TotelPrice}
        </p>
        <p className="text-xl font-normal mt-6 text-white ms-5   hover:text-red-600">
          Total Shoping Charge:${TotalShippingCharg}
        </p>
        <p className="text-xl font-normal mt-6 text-white ms-5   hover:text-red-600">
          Taxt:${Taxt}
        </p>
      </div>
      <div>
        <h4 className="text-center pt-4 text-2xl text-white font-bold hover:text-2xl hover:text-red-600">
          Grand Total:${GrendTotal}
        </h4>
      </div>
      <div className="my-10 ">
        <Button className="flex justify-between items-center text-xl mx-auto " color="red">
          Clear Cart <MdDeleteOutline className="size-7 text-black ms-2 "></MdDeleteOutline>
        </Button>
        <Button
          className="flex justify-between items-center text-xl mt-3 mx-auto"
          color="red"
        >
          Review Order <FaArrowRight className="size-7 text-black  ms-2"></FaArrowRight>
        </Button>
      </div>
    </div>
  );
};

export default Orders;
