import React, { useEffect, useState } from 'react'
import FoodCard from './components/FoodCard'

import Header from './components/Header'
import FoodContextProvider from './store/FoodContext'
import AddToCartDialog from './components/AddToCartDialog'
const App = () => {
  const [isOpen,setIsOpen]=useState(false);
  const [products,setProducts]=useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
  return (
  
         
        <FoodContextProvider>
        <Header onCartClick={()=>{
            setIsOpen((prev)=>!prev)
        }}/>

        {
          isOpen?(
            <>
            <AddToCartDialog/>
            </>

          ):(
            <ul className='grid grid-cols-4 p-4'>
          {
            products.map(
              (product)=>{
                return <li className='flex ' key={product.id}><FoodCard product={product}/></li>
              }
            )
          }
        </ul>
          )
        }
        
      </FoodContextProvider>
      
    
  )
}

export default App