import { useLocation } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../footer/Footer";
import TopBar from "../topbar/topbar";
import'./productdetail.css'
import { useState } from "react";
function ProductDescription(){

    const location=useLocation();
    let productDetail=location.state.productdetail;
   console.log(productDetail);
    return<>
    <TopBar/>
    <Header/>
    
    <div className="container containerdetail">
  <div className="col-lg-10 border p-3 main-section bg-white mb-5">
    <div className="row hedding m-0 pl-3 pt-0 pb-3">
      Product Description
    </div>
   
     <div className="row m-0">
      <div className="col-lg-6 left-side-product-box pb-3">
        <img
          src={productDetail.thumbnail} 
          style={{height:'400px',width:'400px'}}
          className="border p-3"
        />
        
      </div>
      <div className="col-lg-6">
        <div className="right-side-pro-detail border p-3 m-0">
          <div className="row">
            <div className="col-lg-12">
              <p>{productDetail.title}</p>
              <span className="m-0 p-0">{productDetail.brand}</span>
            </div>
            <div className="col-lg-12">
              <p className="m-0 p-0 price-pro">Rs.{productDetail.price}</p>
              <h4>Discounted Price :<span className="m-0 p-0 price-pro text-success">{Math.round((productDetail.price - (productDetail.price*productDetail.discountPercentage)/100))}</span></h4>
              <hr className="p-0 m-0" />
            </div>
            <div className="col-lg-12 pt-2">
              <h5>Product Detail</h5>
              <span>
               {productDetail.description}

              </span>
              <hr className="m-0 pt-2 mt-2" />
            </div>
           
            <div className="col-lg-12">
             <h5>Discount Percentage : <span>{productDetail.discountPercentage}</span></h5>
            </div>
            <div className="col-lg-12">
             <h5>Rating : <span>{productDetail.rating}</span></h5>
            </div>
            <div className="col-lg-12">
             <h5>Stock : <span>{productDetail.stock}</span></h5>
            </div>
            <div className="col-lg-12 mt-3">
              <div className="row">
                <div className="col-lg-6 pb-2">
                  <a href="#" className="btn btn-danger w-100">
                    Add To Cart
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="/" className="btn btn-success w-100">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
    
   
  </div>
</div>

<Footer/>
    </>
    
}

export default ProductDescription;