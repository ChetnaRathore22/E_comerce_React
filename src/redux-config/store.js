import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import recentproductSlice from "./recentproductSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer:{
        category:categorySlice,
        product:recentproductSlice,
        currentUser:userSlice,
        fetchCart:cartSlice
    }
})

export default store;