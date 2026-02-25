import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//put
// async function postmethod(id){

//   let res=await fetch(`http://localhost:3000/users/${id}`,{
//     method:"PUT",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify({
//       id,
//       name:"Anokhu",
//       email:"Anokhu@gmail.com"
//     })
    
    

//   })

//  let data=await res.json();
//   console.log(data); 
// }
//post
// async function postmethod(id){

//   let res=await fetch(`http://localhost:3000/users`,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify({
//       id,
//       name:"Anokhu"
//     })
    
    

//   })

//  let data=await res.json();
//   console.log(data); 
// }


async function postmethod(id){

  let res=await fetch(`http://localhost:3000/users/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      id,
      name:"Anokhu"
    })
    
    

  })

 let data=await res.json();
  console.log(data); 
}
function App() {
 
  return (
    <>
    <button onClick={()=>{postmethod("c93e")}}>PostCall</button>
    </>
  )
}

export default App
