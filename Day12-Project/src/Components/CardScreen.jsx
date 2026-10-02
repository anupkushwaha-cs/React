import React, { useContext } from 'react';
import CartCard from './CartCard';
import { MyStore } from '../Context/MyContext';


const CardScreen = () => {

  let {cartItems}=useContext(MyStore);

  return (
    <div>
        {cartItems.map((elem)=>{
            return <CartCard key={elem.id} product={elem}/>
        })}
    </div>
  )
}

export default CardScreen;