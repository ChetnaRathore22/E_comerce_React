import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        token:null,
        error:null
      
    },
    reducers:{
        setCurrentUser:(state,action)=>{
           state.currentUser=action.payload;
        },
        setToken:(state,action)=>{
            state.token=action.payload
        },
        signout:(state,action)=>{
           state.currentUser=null
        }
    }
})
export const {setCurrentUser,signout,setToken}=slice.actions;
export default slice.reducer;