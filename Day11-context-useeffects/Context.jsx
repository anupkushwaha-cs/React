import React, {createContext, useState } from 'react';
 
export let MyCount = createContext();


export const ContextProvider = ({children}) =>{

    const [count, setCount] = useState(0);


    return <MyCount.Provider value = {{count, setCount}}>
       {children}
    </MyCount.Provider>
}

export default ContextProvider;