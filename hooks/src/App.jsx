import { useState, useEffect,useCallback } from "react";

function App() {
  const [query, setQuery] = useState("react");
  const [count,setCount]=useState(0);
  const fetchData=useCallback(function fetchData2() {
    console.log("Fetching for:", query);
    setQuery("java");
  },[query]) 

  useEffect(() => {
    fetchData();
  }, [fetchData]);   
  return(
  <>
  <p>
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
  </p>
  </>
)
}

export default App;