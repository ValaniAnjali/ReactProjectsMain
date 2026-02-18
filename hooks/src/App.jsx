import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child />
    </div>
  );
}

export default App;
