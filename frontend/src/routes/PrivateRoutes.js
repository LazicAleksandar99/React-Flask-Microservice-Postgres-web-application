import React from 'react';
import { useLocation, Navigate, Outlet} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () =>{
  
    const { auth } = useAuth();
    const location = useLocation();

    return (
      auth?.email
          ? <div> <Navbar/> <Outlet/> <Footer/> </div>
          : <Navigate to="/signin" state={{ from: location }} replace/>
  );
}
export default PrivateRoutes;