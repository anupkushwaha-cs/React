
import React, { useEffect, useState } from "react";
import UsersCard from "../Components/UsersCard";
import { userAPI } from "../config/axiosInstance";

const UsersPage = () => {

   const [usersData, setUsersData] = useState([]);
const getUsersData = async () => {
   
    try {
      let res = await userAPI("/users");
      console.log(res.data);
      setUsersData(res.data);
    } catch (error) {
      console.log("Error in API ", error);
    }
  };
  useEffect(() => {
    getUsersData();
  }, []);
  return <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
    {
      usersData.map((val)=>{
        return <UsersCard  key={val.id} user={val}  />
      })
    }
  </div>;
};

export default UsersPage;
