import React, { useState } from 'react'

function App() {

  let [count, countState]=useState(0);
  return (
    <div>
      <h1> Count = {count}</h1>
      <button onClick={()=>{
        countState(count+1)
      }}>
        Increment
      </button>
    </div>
  )
}

export default App