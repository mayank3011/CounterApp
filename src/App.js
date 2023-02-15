import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  let color = "green";
  if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center' style={{height: "50vh"}}>
      <div>
      <h1 className='text-center' style={{ color: color }}>{count}</h1>
        <div className="d-flex">
          <button onClick={incrementCount}className='btn btn-success me-3'>Increment</button>
          <button onClick={decrementCount}className='btn btn-danger me-3'>Decrement</button>
        </div>
      </div>
    </div>
    <div>
      <p className="text-center">Name: Mayank Rajput    Reg no:12011597</p>
    </div>
    </div>
  );
}

export default Counter;
