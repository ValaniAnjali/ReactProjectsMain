import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const nameRef=useRef();
  const[namee,setNamee]=useState();
  let name;
  function changeName(){
     name=nameRef.current.value;
    setNamee(name);
   nameRef.current.value="";
    
  }
  return(
    <>
    <p>Welcome {namee??"guest"}</p>
    <input type="text"  ref={nameRef}/>
    <button onClick={changeName}>submit</button>
    
    </>
  )
}


export default App
