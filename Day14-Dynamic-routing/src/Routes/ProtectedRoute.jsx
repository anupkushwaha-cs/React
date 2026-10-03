import React, { Children } from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    let isAdmin = false;
    if(!isAdmin){
        console.log("Hay I am running");
        return <Navigate to={"/"}/>
    }
  return children;
}

export default ProtectedRoute