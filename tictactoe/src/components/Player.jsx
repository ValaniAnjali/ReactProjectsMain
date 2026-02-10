import { useState } from "react"

export default function Player({name,sign,isActive,onChangeName}){
    
    const[isEditing,setIsEditing]=useState(false);
    const[playerName,setPlayerName]=useState(name);

    function handleEdit(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
            onChangeName(sign,playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }


    return(
        <li className={isActive?'active':undefined}>
          <span className='player'>
          {!isEditing && <span className='player-name'>{playerName} </span>}
            {isEditing && <input type="text" value={playerName} onChange={handleChange} required/>}

          <span className='player-symbol'>{sign}</span>
          </span>
          <button onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
        </li> 
    )
}

// user input and 2 way binding
//Rendering Multidimensional list