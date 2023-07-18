import { useSelector } from "react-redux";
import'../../globalcss/global.css'
import { useNavigate } from "react-router-dom";
function RecentProduct() {
    const {recentproductList,isLoadiing,error}=useSelector((state)=>state.product)
    console.log(recentproductList);

     const navigate=useNavigate();
    const viewDiscription=(item)=>{
        navigate('/description',{state:{productdetail:item}});
    }

    return <>
        <div className="popular-items pt-50">
            <div className="container-fluid">
            <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    <h2>Recent Products</h2>
                </div>
            </div>
        </div>
                <div className="row">
                {recentproductList.map((item,index)=>
                <div key={index} className='col-lg-3 col-md-6 col-sm-6 mt-5 mb-5'>
                        <div className="card">
                            <div className="card-header border">
                                <h4 className='card-heading'>{item.title.substring(0,18)}</h4>
                            </div>
                        
                            <div className="card-img">
                                <img className="card-img-top " src={item.thumbnail} height='200px' alt="Card image cap" />
                                
                                </div>
                            <div className="card-text p-2"><span className='card-heading'>Price -</span>
                                <del className="ml-2">{item.price}</del>
                                <span className='text-success ml-1'>{item.price-(item.price*item.discountPercentage/100).toFixed(2)}</span>Rs.
                                <p className='card-text'>{item.description.substring(0, 50)}</p>
                            </div>
                            <div className='  text-align: end; p-2'>
                                <i className=' shooping-logo bi bi-suit-heart-fill' type="button" ></i>
                                <i className=' shooping-logo bi bi-cart-fill' type="button" ></i>
                                <i onClick={()=>viewDiscription(item)}className=' shooping-logo bi bi-eye-fill' type="button"></i>
                                <i className="shooping-logo bi bi-bag-fill" type="button" ></i>


                            </div>
                        </div>
                    </div>)}
                    
                   
                </div>
            </div>
        </div>

    </>
}

export default RecentProduct;