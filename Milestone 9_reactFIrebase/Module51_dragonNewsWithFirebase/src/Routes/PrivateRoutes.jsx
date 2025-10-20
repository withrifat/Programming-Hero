import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();


    if(loading){
        return <Loading></Loading>;
    }

  if (user && user?.email) {
    return  children ;
  } else{
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  }
};

export default PrivateRoutes;
