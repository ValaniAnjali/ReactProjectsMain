import React from 'react'
import investmentImg from '../assets/investment_Img.jpg'
const Header = () => {
  return (
    <div className='flex text-3xl bg-amber-300 w-full  p-5 justify-center space-x-15'>
    <img src={investmentImg} alt='logo' className='flex justify-center h-25'/>
    <h1 className='flex justify-center py-8' 
    style={{color:'red',
            

    }} >
      Investment Calculator</h1>
    </div>
  )
}

export default Header