import React from 'react';
import { useLocation, Navigate, Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ allowedRoles }) =>{
  
    const { auth } = useAuth();
    const location = useLocation();

    return (
          allowedRoles?.includes(auth?.role)
          ? <div> <Navbar/> <Outlet/> <Footer/> </div>
          : auth?.token
            ? <Navigate to="/unauthorized" state={{ from: location }} replace/> 
            : <Navigate to="/signin" state={{ from: location }} replace/>
  );
}
export default PrivateRoutes;