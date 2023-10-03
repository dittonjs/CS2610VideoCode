import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    setCount((oldState) => {
      return oldState + 1;
    });
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}