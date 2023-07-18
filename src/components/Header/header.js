import { useDispatch, useSelector } from "react-redux";
import{Link} from'react-router-dom';
import './header.css'
import { signout } from "../../redux-config/userSlice";
import { toast } from "react-toastify";
function Header(){

 const{categoryList,isLoading,error} = useSelector((state)=>state.category);
 const {currentUser}=useSelector((state)=>state.currentUser);
 const{cartItems}=useSelector((state)=>state.fetchCart);
 console.log(cartItems);
 const dispatch = useDispatch();

 const signOut=()=>{
    dispatch(signout());
    toast.info("Sign Out Successfully");

 }
    return<>
        
    <header>
 
        <div className="header-area ">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="menu-wrapper d-flex align-items-center justify-content-between">
                        <div className="header-left d-flex align-items-center">
                     
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                       
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to='/'>Home</Link></li> 
                                        <li>
                                            <a href="#">Category</a>
                                            <ul className="submenu " style={{height:'300px',overflowY:'scroll'}}>
                                                {categoryList.map((category,index)=> <li key={index}><a>{category.categoryName}</a></li>)}
                                               
                                                
                                            </ul>

                                        </li>
                                        {!currentUser &&  <li><a>My Account</a>
                                            <ul class="submenu">
                                            <li><Link to='/signup'>SignUp</Link></li>
                                            <li><Link to='/signin'>SignIn</Link></li>
                                            </ul>
                                        </li>}
                                       
                                         {currentUser&& <li onClick={signOut}>SignOut</li>}
                                        <li><Link to='/shop'>Shop</Link> </li>
                                        <li><a href="">Contact</a></li>
                                  
                                       
                                      
                                    </ul>
                                </nav>
                            </div>   
                        </div>
                        <div className="header-right1 d-flex align-items-center">
                       
                            <div className="header-social d-none d-md-block">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                           
                            <div className="search d-none d-md-block">
                                <ul className="d-flex align-items-center">
                                    <li className="mr-15">
                                        <div className="nav-search search-switch">
                                            <i className="ti-search"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/cart'>
                                        <div className="card-stor">
                                            <img src="assets/img/gallery/card.svg" alt=""/>
                                            <span>{cartItems.length}</span>
                                        </div>
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </header>
    
    </>
 
}

export default Header;