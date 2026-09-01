import React, { useState } from "react";

const Inputs = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
    
    
    
    
  });
  console.log(form);

  const handleChange = (e) => {
          setForm({...form ,[e.target.name]: e.target.value})
        }
  
 
  return (
    <div>
      <input
        // onChange={(e) => {
        //   setForm({...form ,name: e.target.value})
        // }}
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Name"

        
  />
  <h2>name is {form.name}</h2>



      <input
        // onChange={(e) => {
        //   setForm({...form, email:e.target.value});
        // }}

        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email"
      />

     

      <input
        // onChange={(e) => {
        //   setForm({...form, password:e.target.value});
        // }}
        name = "password"
        onChange={handleChange}
        type="text"
        placeholder="Password"
      />

      
    </div>
  );
}; 

export default Inputs;
