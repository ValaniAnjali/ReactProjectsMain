import React from 'react'
import image2 from '../assets/react.svg'
import './Header.css'

const Header = () => {
  
  const description=reactDescriptions[getRandomInt(2)]
  
  return (
    <header>
      <img src={image2} alt='hello'></img>
      <h1>React essentials</h1>
      <p>
        {description} react components you will need for lmost app we will build lol...
      </p>
    </header>
  );
}

export default Header

// Dynamic value
const reactDescriptions=['Fundamental','Crucial','Core'];
function getRandomInt(max){
  let x=5;
  x="hello";

  return Math.floor(Math.random()*(max+1));
}