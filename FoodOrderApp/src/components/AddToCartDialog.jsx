import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../store/FoodContext'
import Checkout from './Checkout';

const AddToCartDialog = () => {
  const [isCheckoutClick,setIsCheckoutClick]=useState(false);
  const {increaseQuantity,decreaseQuantity,cartItems}=useContext(FoodContext);
  const totalPrice=cartItems.reduce((total,item)=>{
    total=total+(item.price * item.quantity);
    return total;
  },0)
  function checkoutClick(){
    setIsCheckoutClick((prev)=>!prev)
  }
  
  
  return (
    <div className='w-200 h-screen bg-amber-400 my-4 mx-auto'>
      {
             isCheckoutClick&&<Checkout totalPrice={totalPrice}/>
      }
     <ul>
      {
        cartItems.length>0?
         (cartItems.map(cartItem=>
          <>

          <li className=' bg-white flex flex-row space-x-25 w-180 p-5 m-5 mx-auto'>
            <div className='flex flex-col'>
              <p>{cartItem?.name}</p>
            <p>Rs: {cartItem?.price}₹</p>
            <p>{cartItem?.quantity}</p>
            <p>Total:{(cartItem?.price)*(cartItem?.quantity)}₹</p>
             </div>
            <div className='flex flex-row p-5 space-x-3'>
            <button className='rounded-2xl bg-amber-500 p-5' onClick={()=>increaseQuantity(cartItem.id)}>+</button>
            <button className='rounded-2xl bg-amber-500 p-5' onClick={()=>decreaseQuantity(cartItem.id)}>-</button>

           
            </div>
           
          </li>
          
         
          </>)

          
          
         ):(
          <p>No Items Added To Cart.</p>
         )
      }
     </ul>
     <ul>
      <li>
        <p>Total Price: {totalPrice??0}</p>
        <button className='flex bg-amber-950 rounded text-white p-5 mx-auto' onClick={checkoutClick}>Checkout</button></li>

     </ul>
        
    </div>
  )
}

export default AddToCartDialog