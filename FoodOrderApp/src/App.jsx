import React from 'react'
import FoodCard from './components/FoodCard'
import {products} from '../db.json'
import Header from './components/Header'
const App = () => {
  return (
    <div>
         

        <Header/>
        <ul className='grid grid-cols-4 p-4'>
          {
            products.map(
              (product)=>{
                return <li className='flex ' key={product.id}><FoodCard name={product.name} price={product.price} description={product.description} image={product.image}/></li>
              }
            )
          }
        </ul>
     
      
    </div>
  )
}

export default App