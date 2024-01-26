import { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';


const useLocalstorage = (products)=>{
    const [card,setCard] = useState([])
    useEffect(()=>{ 
        const storedCard = getShoppingCart();
        const saveCard = [];
        for (const id in storedCard) {
            const addedCard =products.find(product =>product.id===id)
            if(addedCard){  
                const quantity = storedCard[id];
                addedCard.quantity = quantity;
                saveCard.push(addedCard)
            }
            
        }
        setCard(saveCard);
       
    },[products])
    return [card,setCard];
}

export default useLocalstorage;