import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "deepika",
  });
  return (
    <div>
      <h1> Count is - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <h1>Name is {user.name}</h1>
      <button onClick={() => (user.name = "ranveer")}>Change name</button>
    </div>
  );
};

export default App;
