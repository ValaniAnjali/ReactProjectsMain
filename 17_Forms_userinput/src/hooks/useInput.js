import { isValidElement, useState } from "react";

export function useInput(defaultValue,validateValue){
    const [enteredValue,setEnteredValue]=useState(defaultValue);
    const valueisValid=validateValue(enteredValue);
    const [didEdit,setDidEdit]=useState(false);
       function handleInputChange(event){
        setEnteredValue(event.target.value);
        setDidEdit(false);

    
        
    }
    function handleInputBlur(){
      setDidEdit(true);

    }

    return{
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError:didEdit && !valueisValid
    }

}
