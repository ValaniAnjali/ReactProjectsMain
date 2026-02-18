import {  useReducer, useState } from "react";
import Layout from "./Layout";
import { ThemeContext } from "./store/ThemeContext";

function App() {
  function themeReducer(state,action){
    switch(action.type){
      case "TOGGLE":{
        console.log(state);
        return {
          theme:state.theme==='light'?'dark':'light'
        }
      }
      default:
        return state;
    }
 }

 const[themeState,dispatcher]=useReducer(themeReducer,{theme:'light'})
 
// const [theme,setTheme]=useState('light');
  function changeTheme(){
    dispatcher(
      {type:"TOGGLE"}
    )
  }
return(
  <>
    App

    <ThemeContext.Provider value={{theme:themeState.theme,changeTheme}}>
      <Layout/>
    </ThemeContext.Provider>
    
  </>
)
}

export default App;
