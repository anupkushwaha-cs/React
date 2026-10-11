import React, { useCallback, useEffect, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "raghav", id: 789 });

  let calculation = useMemo(() => {
    console.log("calculation running....");
    let sum = 0;

    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [users]);

  let greet = useCallback(() => {
    console.log("good evening...");
  }, []);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <h2>NAme is {users.name}</h2>
      <h2>My calculation is {calculation}</h2>
      <button onClick={() => setUsers({ ...users, name: "Ranjeet" })}>
        Change name{" "}
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home greet={greet} />
      <About greet={greet} />
    </div>
  );
};

export default App;
