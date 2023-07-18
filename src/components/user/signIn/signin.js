import { useState } from 'react';
import './signin.css'
import axios from 'axios';
import { apiEndPoint } from '../../../webApi/api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setToken } from '../../../redux-config/userSlice';




function SignIn() {
   const navigate=useNavigate();
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
    const dispatch =useDispatch();

    const handleSubmit=async(event)=>{
        try{
          event.preventDefault();
           const response = await axios.post(apiEndPoint.USER_SIGNIN,{email,password})
           console.log(response.data);
           if(response.data.status){
            dispatch(setToken(response.data.token))
            dispatch(setCurrentUser(response.data.user));
            // dispatch(fetchCart(response.data.user._id));
             navigate('/');
            return response.data.user;
         }
        }catch(err){
             toast.error("Sign In Faied")
        }
    }
    return <>
    <ToastContainer/>
        <section className="background-radial-gradient overflow-hidden " style={{ height: '500px' }}>
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1
                            className="my-5 display-5 fw-bold ls-tight"
                            style={{ color: "hsl(218, 81%, 95%)" }}
                        >
                            The best offer <br />
                            <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
                            expedita iusto veniam atque, magni tempora mollitia dolorum
                            consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi
                            dolorem modi. Quos?
                        </p>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div
                            id="radius-shape-1"
                            className="position-absolute rounded-circle shadow-5-strong"
                        />
                        <div id="radius-shape-2"
                            className="position-absolute shadow-5-strong" />
                        <div className="card bg-glass" style={{ width: '350px' }}>
                            <div className="card-body  px-4 py-5 px-md-5 ">
                            <form className="mx-1 mx-md-4"  onSubmit={handleSubmit}>

                                <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input onChange={(event)=>setEmail(event.target.value)} type="email"  className="form-control" placeholder="Enter Email" />
                                            
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input onChange={(event)=>setPassword(event.target.value)} type="password"  className="form-control" placeholder="Enter Password"
                                            />
                                            
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-5">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            SIGNIN
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </>
}

export default SignIn;