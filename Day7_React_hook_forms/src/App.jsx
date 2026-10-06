import React from "react";
import Form from "./components/Form";

const App = () => {
  console.log("app rendering...");

  return (
    <div className="h-screen p-5 bg-gray-300 w-full">
      <h1 className="mb-8">Hey this is form</h1>

      <Form/>
    </div>
  );
};

export default App;