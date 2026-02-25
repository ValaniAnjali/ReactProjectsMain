import React, { useState } from 'react'
import cart from '../assets/cart.png';
import AddToCartDialog from './AddToCartDialog';
const cartClick=()=>{
    console.log('clicked on cart icon');
   
}
const Header = ({onCartClick}) => {
  
  return (
    <>
    <div className='w-full h-30 object-cover flex justify-between bg-amber-600 text-white text-6xl font-bold text-center'>
        <h1>Food Ordering App</h1>
        <img src={cart} alt='image' onClick={
          onCartClick
        }/>
       
    </div>
    </>
  )
}

export default Header