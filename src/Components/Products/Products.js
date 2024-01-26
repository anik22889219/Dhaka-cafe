import Card from '../Card/Card';
import useProducts from '../../hooks/useProducts';
import Orders from '../Orders/Orders';

import { addToDb } from '../../utilities/fakedb';
import useLocalstorage from '../../hooks/useLocalstorage';


const Products = () => {
    const [products,setProducts] = useProducts()
    const [card,setCard] = useLocalstorage(products)
      // add too localstorage
    const addTocard=(selecetedProduct)=>{
      let newCard = []
      const exists = card.find(product =>product.id===selecetedProduct.id);
      if(!exists){
          selecetedProduct.quantity= 1;
          newCard = [...card,selecetedProduct];
      }
      else{
              const rest = card.filter(product => product.id !== selecetedProduct.id);
              selecetedProduct.quantity = selecetedProduct.quantity + 1;
              newCard = [...rest,selecetedProduct];
              
      }
      // console.log(newCard);
      
      setCard(newCard);
      addToDb(selecetedProduct.id)
      // console.log(newCard)
      }

    
    return (
        <div className='sm:mx-5 grid lg:grid-cols-4 md:grid-cols-3 relative'>
           <div className='col-span-1 lg:col-span-3 md:col-span-2'>
           <h1 className='mt-6 b-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-start text-center '>All Products</h1>
            <div className='grid sm:grid-cols-1  lg:grid-cols-2 justify-center gap-5 mt-8'>
            {
                products.map(product =><Card
                key={product.id}
                addTocard={addTocard} 
                product ={product}></Card> )
            }
            </div>
           </div>
           <div className='col-span-1   '>
            <Orders products={card}></Orders>
           </div>
        </div>
    );
};

export default Products;