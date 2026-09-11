import React, { useState } from "react";
import Navbar from "./components/Navbar";

import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {

  const [toggle, setToggle]= useState(false);
    const [User, setUser] = useState([]);

 return (
    <div className="p-3 min-h-screen flex flex-col gap-4">

      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          
          {
            User.map((elem)=>{
              return<Card user={elem}/>
            })
          }
        </div>
      ) : (
        <Form setUser={setUser} setToggle ={setToggle} />
      )}

    </div>
  );
};

export default App;
