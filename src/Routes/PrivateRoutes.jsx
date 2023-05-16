import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    console.log('user imn private router', user);
    if(loading){
        return <div className="flex justify-center items-center">
        <div class="spinner border-4 border-gray-300 rounded-full w-12 h-12"></div>
      </div>
      
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;