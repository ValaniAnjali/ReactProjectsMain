import { useEffect, useState } from "react";
import Layout from "./Layout";

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
    <Layout changeTheme={changeTheme}/>
  </>
)
}

export default App;
