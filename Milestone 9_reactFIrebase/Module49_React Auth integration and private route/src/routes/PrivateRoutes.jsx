import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading}  = use(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>;
    }
    if(user){
        return children ;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
    
};

export default PrivateRoutes;