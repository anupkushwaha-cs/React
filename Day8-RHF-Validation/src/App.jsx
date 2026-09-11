import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const [User, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    let filterUser = User.filter((val) => {
      return val.id !== id;
    });

    setUser(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="p-3 min-h-screen flex flex-col gap-4">

      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {
            User.map((elem) => {
              return (
                <Card
                  key={elem.id}
                  user={elem}
                  setToggle={setToggle}
                  deleteUser={deleteUser}
                  setUpdatedData={setUpdatedData}
                />
              );
            })
          }
        </div>
      ) : (
        <Form
          setUser={setUser}
          setToggle={setToggle}
          User={User}
          updatedData={updatedData}
        />
      )}
    </div>
  );
};

export default App;
