import React, { useState } from "react";
import Tweet from "./Tweet";


function App () {
  const [isRed, setRed] = useState(false);
  const [count, setCount] =useState(0);
  const pressButton = () => {
  setCount(count +1)
  setRed(!isRed);
  };
  
  return (
    <div className="app">
      <h1 className={isRed ? 'red' : ""}>Émile</h1>
      <button onClick={pressButton}>Press here</button>
      <h1>{count}</h1>
      </div>
  );
  }

 
        
export default App;



