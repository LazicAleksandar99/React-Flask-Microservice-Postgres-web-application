import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivateRoutes = () =>{
    let auth = {'token': true}
  return (
      auth.token ? <div> <Navbar/> <Outlet/> <Footer/> </div>: <Navigate to="/signin"/>
  );
}
export default PrivateRoutes;