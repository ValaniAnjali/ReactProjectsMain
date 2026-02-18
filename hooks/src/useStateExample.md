import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
 function Increment(value){
    setCount((prev)=>prev+1+value);
 }

  return (
    <>
      <button onClick={()=>{Increment(5)}}>Increment</button>
      <p>{count}</p>
    </>
  )
}

export default App
