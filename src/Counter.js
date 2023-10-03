import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0); 
  };

  return (
    <div className="container">
      <p className="cou">Contatore: </p>
      <p className="counter">{count}</p>
      <div className="button-container">
        <button className="button" onClick={decrement}>-</button>
        <button className="button" onClick={reset}>Reset</button>
        <button className="button" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
