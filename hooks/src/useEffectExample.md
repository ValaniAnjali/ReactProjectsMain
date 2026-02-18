import { useEffect, useRef, useState } from 'react'

import './App.css'
function App() {
  const [time,setTime]=useState(5);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(time<=0){
        return;
      }
      setTime(count=>count-1);
      
    },1000);
    return()=>{
        console.log(time);
        clearTimeout(timer);
      }
  })
  return(
    <>
    <h1>{time}</h1>
    </>
  )
}


export default App


import { useEffect } from "react";

function App() {
  useEffect(() => {
    let count = 5;

    const interval = setInterval(() => {
      console.log(count);
      count--;
      if(count==0){
        count=5;
      }
      
    }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return null;
}

export default App;
