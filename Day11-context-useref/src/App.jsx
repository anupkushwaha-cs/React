import React, { useEffect, useState } from 'react'
import About from './About';
import Contact from './Contact';

import {useContext } from 'react'

const App = () => {
const [count, setCount] = useState(0);
const [toggle, setToggle] = useState(false);


useEffect(()=>{
  console.log("toggle Re-Rendering");
  
  
}, [toggle]);




  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick = {()=>{
        setCount(count+1)
      }}>Increment</button>

      <button onClick={()=>{
        setToggle(prev=>!prev)
      }}>toggle state changed</button>


      {toggle ? (<About/>) :( <Contact/>)}
    </div>
  )
}

export default App;