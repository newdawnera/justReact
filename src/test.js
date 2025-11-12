import { useState } from "./react";

function App() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum((num) => num + 1);
  };

  const decrease = () => {
    setNum((num) => num - 1);
  };

  return (
    <div className="App">
      <button onClick={decrease}>+</button>
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
