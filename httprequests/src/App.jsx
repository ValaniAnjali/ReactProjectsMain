import { useRef, useState } from 'react';
import './App.css'

function App() {
  const[data,setData]=useState([]);
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[orgId,setOrgId]=useState('');
  const[selectedId,setSelectedID]=useState(null);

  let res,dataa;
   async function loadData(id){
       res= await fetch(`http://localhost:8090/employees?organizationId=${id}`)
      dataa=await res.json();
     console.log(dataa);
     setData(dataa);
    }
    async function postData(){
     
      res=await fetch(selectedId?`http://localhost:8090/employees/${selectedId}`:`http://localhost:8090/employees`,{
        method:selectedId?'PUT':'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,"organizationId":orgId})
        
      })
     loadData(1);
      
    }
    async function updatedata(name,email,id,organizationId){
      setName(name);
      setOrgId(organizationId);
      setEmail(email);
      setSelectedID(id)
      
    }
    async function deleteData(id){
      await fetch(`http://localhost:8090/employees/${id}`,{
        method:'DELETE',
        headers:{
          "Context-Type":"application/json"
        },

        
      })
       setData((prev)=>prev.filter(item=>item.id!== id));
    }
  return (
    <>
    <div>
      <h1>Users</h1>
      <input placeholder='Enter organizationId' value={orgId} onChange={(e)=>{setOrgId(e.target.value)}}/>
      <input placeholder='Enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <button onClick={postData}>{selectedId?"Update":"Add"} data</button>
    </div>
    <button onClick={()=>{loadData(1)}}>Get Data</button>
    <ul>
      {data.map((user)=>{
        return(
          <div key={user.id}>
          <li>{user.name} {user.email} {user.id} {user.organizationId}</li>
          <button onClick={()=>{updatedata(user.name,user.email,user.id,user.organizationId)}}>Update</button>
          <button onClick={()=>{deleteData(user.id)}}>Delete</button>
          </div>
        )
      })}
    </ul>
    </>
  )
}

export default App
