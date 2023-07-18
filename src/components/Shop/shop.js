import axios from "axios";
import { useEffect, useState } from "react";
import { apiEndPoint } from "../../webApi/api";
import Header from "../Header/header";
import Footer from "../footer/Footer";
import {useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer} from "react-toastify";
import {updateCartItems } from "../../redux-config/cartSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/spinner";
import TopBar from "../topbar/topbar";


function Shop() {

    const [product, setProduct] = useState([]);
    const [error, setError] = useState("")
    const [setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const { currentUser,token } = useSelector((state) => state.currentUser)

   console.log(currentUser);
   console.log(token)
   console.log(product);

    const dispatch = useDispatch();
    const navigate=useNavigate();

    const loadProduct = async () => {
        try {

            let response = await axios.get(apiEndPoint.SHOP_PRODUCT_SLICE + `?page=${page}`);
            if (response.data.status) {
                console.log(response.data)
                setProduct(response.data.products);
                setProduct([...product, ...response.data.products]);
                setPage(page + 1);
                setIsLoading(false);
            }
        }
        catch (err) {
            setError("Oops! something went wrong..");
        }
    }
    
    const viewDiscription=(item)=>{
        navigate('/description',{state:{productdetail:item}});
    }


    // const addToCart = async(product) => {
    // try{
    //     if (!currentUser)
    //         toast.dark("Please Login To Perform This Operation")
    //     else {

    //         let response=await axios.post(apiEndPoint.ADD_TO_CART,{ userId: currentUser._id, productId: product._id})
    //         console.log(response.data);
    //         toast.info("Product is Added in cart")
    //     }}catch(err){
    //         if(err.response.status==400)
    //         toast.warning("Product is already Exist in cart");
    //         if(err.response.status==500)
    //         toast.error("Internal Server Error");
    //     }
            

    //     }

    const addToCart=async(product)=>{
        dispatch(updateCartItems(product))
    }
    
    
    useEffect(() => {
        loadProduct();
       
    }, [])
  

    return <>
    <TopBar/>
        <Header />
        <ToastContainer />

        <div className="new-arrival">
            <div className="container">
                <h1 style={{ color: '#9F78FF' }}>Products</h1>
                <InfiniteScroll
                    dataLength={product.length}
                    next={loadProduct}
                    hasMore={product.length < 100}
                    loader={<Spinner />}
                    endMessage={<p>Data End...</p>}>
                    <div className="row">

                        {product.map((item, index) =>
                            <div key={index} className='col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5 mb-5'>
                                <div className="card wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                                    <div className="card-header border">
                                        <h4 className='card-heading'>{item.title.substring(0, 18)}</h4>
                                    </div>

                                    <div className="card-img">
                                        <img className="card-img-top " src={item.thumbnail} height='200px' alt="Card image cap" />

                                    </div>
                                    <div className="card-text p-2"><span className='card-heading'>Price -</span>
                                        <del className="ml-2">{item.price}</del>
                                        <span className='text-success ml-1'>{item.price - (item.price * item.discountPercentage / 100).toFixed(1)}</span>Rs.
                                        <p className='card-text'>{item.description.substring(0, 50)}</p>
                                    </div>
                                    <div className='  text-align: end; p-2'>
                                        <i className=' shooping-logo bi bi-suit-heart-fill' type="button" ></i>
                                        <i onClick={() => addToCart(item)} className=' shooping-logo bi bi-cart-fill' type="button" ></i>
                                        <i onClick={()=>viewDiscription(item)}className=' shooping-logo bi bi-eye-fill' type="button"></i>
                                        <i className="shooping-logo bi bi-bag-fill" type="button" ></i>


                                    </div>
                                </div>
                            </div>)}




                    </div>
                </InfiniteScroll>
                <div className="row justify-content-center">
                    <div className="room-btn">
                        <a href="#" className="border-btn">Browse More</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

    </>
}

export default Shop;