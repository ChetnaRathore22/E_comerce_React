import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/header";
import Footer from "../../footer/Footer";
import TopBar from "../../topbar/topbar";
import axios from "axios";
import { apiEndPoint } from "../../../webApi/api";
import { useEffect, useState } from "react";
import {removeCart, increaseQuantity, decreaseQuantity, getTotal } from "../../../redux-config/cartSlice";
import'./cart.css'

function Cart(){
const{currentUser}=useSelector((state)=>state.currentUser);
const{cartItems,totalAmount}=useSelector((state)=>state.fetchCart);

const dispatch=useDispatch();
console.log(cartItems);

  // const loadCart=async()=>{
  //   let response=await axios.post(apiEndPoint.FETCH_CART,{userId:currentUser._id})
  //   console.log(response.data.cart[0].cartItems);
  //   if(response.status){
  //     dispatch(setCartItems(response.data.cart[0].cartItems));
  //   }
  // }

  const removeCartItem=async(id)=>{
     let response=await axios.post(apiEndPoint.REMOVE_BOOK_CART,{userId:currentUser._id,id:id});
    if(response.data.status){
      console.log(response.data.cart);
      dispatch(removeCart(response.data.cart[0].cartItems));
    }
  }


  const handleAddCartItem=(data)=>{
     dispatch(increaseQuantity(data));
  }
  const handleRemoveQuantity=(data)=>{
    dispatch(decreaseQuantity(data));

  }
  
  useEffect(()=>{
    dispatch(getTotal())
},[cartItems,dispatch])

  // useEffect(()=>{
  //   loadCart();
  // },[cartItems])
  return <>
  <TopBar/>
  <Header/>
  <section className="h-100" style={{ backgroundColor: "#eee" }}>
  <div className="container  py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-8" >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
       
        </div>
        <div className="card rounded-3 mb-4 w-100  mt-1 divcard" >
        {cartItems.map((data,index)=> 
          <div className="card-body p-4">
           <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={data.productId.thumbnail}
                  className="img-fluid rounded-3"
                  alt={data.productId.title}
                />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className=" mb-2 text-dark">Title:{data.productId.title}</p>
                <p>
                  <span className="text-muted text-dark">Brand:{data.productId.brand}</span>
                  <p className="text-muted text-dark">rating:{data.productId.rating} </p>
                </p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                
              <a class=" px-2" 
                  onClick={()=>handleRemoveQuantity(data)}>
                  <i class="fas fa-minus"></i>
                </a>

                <input
                  id="form1"  min={1}  pattern="[0-9]{2}" value={data.quantity} name="quantity" type="text"className="form-control form-control-sm"
                />

                <a class="px-2"
                  onClick={()=>handleAddCartItem(data)}>
                  <i class="fas fa-plus"></i>
                </a>
                
               
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0"><span className="text-danger">M.R.P </span>{Math.round((data.quantity*(data.productId.price - (data.productId.price*data.productId.discountPercentage)/100)))}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a  className="text-danger">
                  <i className="fas fa-trash fa-lg"  onClick={()=>removeCartItem(data._id)}/>
                </a>
              </div>
            </div>
           
          </div>)}
        </div>
       
        
     
       
      </div>
      <div className="card col-3 mt-4 pt-1">
        <h3 className="ordersummary">Order Summary</h3>
        <hr/>
        <div className="card-body">
          <h5 className="orderHeading">Total Items &nbsp; &nbsp; :&nbsp; <span>{cartItems.length}</span></h5>
          <h5 className="orderHeading">Shipping Cost &nbsp; : <span>&nbsp;Free</span></h5>
          <h5 className="orderHeading">ToTal Bill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<span>{totalAmount}</span></h5>
        </div>
          <div className="mb-5">
            <button type="button" className="btn btn-warning btn-block btn-lg">
              Proceed to Pay
            </button>
          </div>
        </div>
    </div>
  </div>
</section>
  <Footer/>
  
  </>
}

export default Cart;