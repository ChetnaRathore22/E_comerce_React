import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiEndPoint } from "../webApi/api";

export const recentFetchProduct = createAsyncThunk('recentFetchProduct',async()=>{
    const response = await axios(apiEndPoint.PRODUCT_SLICE);
    return response.data.product
})

const slice = createSlice({
    name:'product',
    initialState:{
        recentproductList:[],
        isLoading:false,
        error:null
    },
    extraReducers:((builder)=>{
        builder.addCase(recentFetchProduct.pending,(state,action)=>{
           state.isLoading=true
        })
        builder.addCase(recentFetchProduct.fulfilled,(state,action)=>{
             state.recentproductList=action.payload
             state.isLoading=false
        })
        builder.addCase(recentFetchProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error='oops Something Went Wrong'
        })
    })
})

export default slice.reducer;