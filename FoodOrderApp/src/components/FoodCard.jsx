import React, { useContext } from 'react'
import { FoodContext } from '../store/FoodContext';

const FoodCard = ({product}) => {

  const {addToCart,cartItems}=useContext(FoodContext);
  //check if product already exists in cart
  const isInCart=cartItems.some(
    (item)=>item.id ===product.id
  )
  return (
    <div className='w-full bg-amber-400'>
        <div className='bg-amber-200 w-xs p-5'>
            <img src={product.image} className='w-full h-48 object-cover' alt='image'/>
            <h1 className='text-2xl text-amber-700'>{product.name}</h1>
            <p className='text-yellow-600'>{product.description}</p>
            <p className='text-fuchsia-900 text-xl'>Price: {product.price} ₹</p>
            <div className='m-5 flex flex-row '>
              {/* <button className='rounded-2xl bg-amber-500 p-5'>+</button> */}
              <button className='bg-orange-600 rounded-2xl p-3 m-2 text-white' onClick={()=>{
                addToCart(product) ;
              }
              
              } disabled={isInCart}>Add To Cart</button>
               {/* <button className='rounded-2xl bg-amber-500 p-5'>-</button> */}
            </div>
    </div>
    </div>
  )
}

export default FoodCard