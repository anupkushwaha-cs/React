import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counterSlice"
import authReducer from "../Features/authSlice"


export const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer,
    },

})