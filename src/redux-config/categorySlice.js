import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiEndPoint } from "../webApi/api";
import axios from "axios";
export const fetchCategory=createAsyncThunk('fetchCategory',async()=>{
    let response =await axios.get(apiEndPoint.CATEGORY_SLICE);
    return response.data.list;
})


const slice=createSlice({
    name:'category',
    initialState:{
        categoryList:[],
        error:null,
        isLoading:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading=true;
        })

        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList=action.payload;
            state.isLoading=false;
        })

        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.error="oops Something Went Wrong"
        });
    }
})

export default slice.reducer;