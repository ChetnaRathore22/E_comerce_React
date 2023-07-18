import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux-config/categorySlice';
import { recentFetchProduct } from './redux-config/recentproductSlice';
import Shop from './components/Shop/shop';
import SignUp from './components/user/signUp/signup';
import SignIn from './components/user/signIn/signin';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/user/cart/cart';
import ProtectedRoute from './components/protectedRoute/productRoute';
import ProductDescription from './components/productDescription/productDesciption';


function App() {
 const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
    dispatch(recentFetchProduct())
  },[])
  return<>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop'  element={<Shop/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/description' element={<ProductDescription/>}/>
      <Route path='/cart'  element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
     </Routes>
    
  </>
}

export default App;
