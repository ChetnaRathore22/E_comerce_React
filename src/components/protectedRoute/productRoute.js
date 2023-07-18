import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function ProtectedRoute({children}){
    const {currentUser}=useSelector((state)=>state.currentUser);
    if(!currentUser) 
     return <Navigate to='/signin'/>
     else
     return children;
}
export default ProtectedRoute; 