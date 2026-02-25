import React from 'react'

const FoodCard = ({name,price,description,image}) => {
  function addToCartClick(){
    console.log("Add To Cart Button clicked..");
  }
  return (
    <div className='w-full bg-amber-400'>
        <div className='bg-amber-200 w-xs p-5'>
            <img src={image} className='w-full h-48 object-cover' alt='image'/>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <button className='bg-orange-600 rounded-2xl p-3 m-2' onClick={addToCartClick}>Add To Cart</button>

    </div>
    </div>
  )
}

export default FoodCard