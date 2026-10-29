import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth", 
    initialState:{
        user: null, 
        isAuthentication: false,
        isLoading:false,
    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload;
            state.isAuthentication=true;
        },

        removeUser:(state)=>{
            state.user=null;
            state.isAuthentication=false;
        }
    }
});

export const {addUser, removeUser} = authSlice.reducer;
export default authSlice.reducer