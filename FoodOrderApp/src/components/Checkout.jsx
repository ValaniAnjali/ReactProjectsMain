import React from 'react'

const Checkout = ({totalPrice}) => {
  return (
    <div className='bg-white w-full'>
        <h1 className='text-2xl'>Checkout</h1>
        <p>Total price is:{totalPrice}</p>
    </div>
  )
}

export default Checkout;