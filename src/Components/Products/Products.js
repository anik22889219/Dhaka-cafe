import Card from "../Card/Card";
import useProducts from "../../hooks/useProducts";
import Orders from "../Orders/Orders";

import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import useLocalstorage from "../../hooks/useLocalstorage";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "@material-tailwind/react";

const Products = () => {
  const [products, setProducts] = useProducts();
  const [card, setCard] = useLocalstorage(products);
  // add too localstorage
  const addTocard = (selecetedProduct) => {
    let newCard = [];
    const exists = card.find((product) => product.id === selecetedProduct.id);
    if (!exists) {
      selecetedProduct.quantity = 1;
      newCard = [...card, selecetedProduct];
    } else {
      const rest = card.filter((product) => product.id !== selecetedProduct.id);
      selecetedProduct.quantity = selecetedProduct.quantity + 1;
      newCard = [...rest, selecetedProduct];
    }
    // console.log(newCard);

    setCard(newCard);
    addToDb(selecetedProduct.id);
    // console.log(newCard)
  };
  let orders;
  if(card.length===0){
    orders='';
  }
  else{
    orders= <div className="col-span-1 ">
    <Orders products={card}>
      
      <Link to="/orders">
        <Button
          className="flex justify-between items-center text-xl mt-3 mx-auto"
          color="red"
        >
          Review Order{" "}
          <FaArrowRight className="size-7 text-black  ms-2"></FaArrowRight>
        </Button>
      </Link>
    </Orders>
  </div>
  }

  return (
    <div className={`sm:ms-5 grid  justify-items-center my-6 ${card.length===0 ?'lg:grid-cols-4 md:grid-cols-2':'lg:grid-cols-5 md:grid-cols-3'}`}>
      <div className="col-span-1 lg:col-span-4 md:col-span-2">
        <h1 className=" b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-start text-center ">
          All Products
        </h1>
        <div className={`grid  justify-center gap-5 my-8 ${card.length===0 ?'lg:grid-cols-4' :'sm:grid-cols-1  lg:grid-cols-3'}`}>
          {products.map((product) => (
            <Card
              key={product.id}
              addTocard={addTocard}
              product={product}
            ></Card>
          ))}
        </div>
      </div>
      {orders}
    </div>
  );
};

export default Products;
