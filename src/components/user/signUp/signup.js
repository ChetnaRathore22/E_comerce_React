import {useState } from "react";
import TopBar from "../../topbar/topbar";
import axios from "axios";
import { apiEndPoint } from "../../../webApi/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function SignUp() {
   const navigate =useNavigate();

    const [name,setName]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
    const [contact,setContact]=useState(" ");
   

 const  handleSubmit=async(event)=>{
    try{
     event.preventDefault()
     var response =await axios.post(apiEndPoint.USER_SIGNUP,{name,email,contact,password});
    
     if(response.data.status){
        navigate("/signin")
    //    toast.success("Sign Up Succesfully")
       
     return response.data.result
     }
    }catch(err){
       toast.error("signUp Failed");
        

    }

  }



    return <>

    <TopBar/>
    <ToastContainer/>
    <div className="mt-5" style={{marginTop:'300px'}}>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">

                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                    Sign up
                                </p>
                                <form className="mx-1 mx-md-4"  onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input onChange={(event)=>setName(event.target.value)} type="text"className="form-control" placeholder="Enter Name" />
                                           
                                        </div>
                                    </div>
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

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-phone fa-lg me-3 fa-fw" />
                                        <div className="form-outline flex-fill mb-0">
                                            <input  onChange={(event)=>setContact(event.target.value)} type="text"  className="form-control" placeholder="Enter Contact" />
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3c"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            I agree all statements in{" "}
                                            <a href="#!">Terms of service</a>
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button  type="submit" className="btn btn-primary btn-lg">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid"
                                    alt="Sample image"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        </div>

    </>
}

export default SignUp;