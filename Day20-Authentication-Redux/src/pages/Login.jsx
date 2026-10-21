import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../Features/counterSlice";

const Login = () => {
  const [inpValue, setInpValue] = useState(0);
  let dispatch = useDispatch();
  let { value } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>Count is = {value}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br /> <br />
      <input
        type="number"
        placeholder="Increment By Value"
        value={inpValue}
        onChange={(e) => setInpValue(Number(e.target.value))}
      />
      <br /> <br />
      <button onClick={() => dispatch(incrementByValue(inpValue))}>
        Change By Value
      </button>
    </div>
  );
};

export default Login;
