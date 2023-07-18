import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";



const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems:localStorage.getItem('cartItem')?JSON.parse(localStorage.getItem('cartItems')):[],
        totalQuantity:0,
        totalAmount:0,
        cartError: null,
        flag: false
    },
    reducers: {
        updateCartItems: (state, action) => {
            const itemindex=state.cartItems.findIndex((item)=>item.productId._id===action.payload._id);
            if(itemindex>=0){
                state.cartItems[itemindex].quantity=state.cartItems[itemindex].quantity+1;
                toast.success(`${action.payload.title} is added to the cart`);
            }else{
                state.cartItems=[...state.cartItems,{productId:action.payload,quantity:1}];
                toast.success(`${action.payload.title} is added to the cart`);
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
        },
        setCartItems:(state,action)=>{
            console.log(action.payload);
            state.cartItems=action.payload;
        },
        removeCart:(state,action)=>{
            state.cartItems=action.payload;
        },
        increaseQuantity:(state,action)=>{
          const itemindex=state.cartItems.findIndex(
            cartItem=>cartItem.productId._id===action.payload.productId._id

          )
          state.cartItems[itemindex].quantity+=1;
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
        },
        decreaseQuantity:(state,action)=>{
            const itemindex=state.cartItems.findIndex(cartItem=>cartItem.productId._id===action.payload.productId._id)
            if(state.cartItems[itemindex].quantity>1){
            state.cartItems[itemindex].quantity-=1;
            }else if(state.cartItems[itemindex].quantity===1){
               const incartItems=state.cartItems.filter(cartItem=>cartItem.productId._id!==action.payload.productId._id);
               state.cartItems=incartItems;
               toast.error("Product Is Removed From the Cart");
            }
            
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
        },
        getTotal:(state)=>{
                let{total,quantities}=state.cartItems.reduce((cartTotal,cartItem)=>{
                    const{price,quantity}={price:cartItem.productId.price,quantity:cartItem.quantity}
                    const itemtotal=price*quantity;
                     cartTotal.total+=itemtotal;
                     cartTotal.quantities+=quantity

                     return cartTotal;
                },{
                    total:0,
                    quantity:0
                });
                state.totalQuantity=quantities;
                state.totalAmount=total;
        }
    },
   
})

export const { updateCartItems,setCartItems,removeCart,increaseQuantity,decreaseQuantity,getTotal } = slice.actions;
export default slice.reducer;