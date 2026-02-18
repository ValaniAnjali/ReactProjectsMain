import { useEffect, useState } from "react";
import Layout from "./Layout";
import { ThemeContext } from "./store/ThemeContext";

function App() {
 
const [theme,setTheme]=useState('light');
  function changeTheme(){
    setTheme(prev=>
      prev==='light'?'dark':'light'

    )
    console.log(theme);
  }
return(
  <>
    App
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <Layout/>
    </ThemeContext.Provider>
    
  </>
)
}

export default App;
