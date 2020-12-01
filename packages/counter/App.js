import React, { useCallback, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDecrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
