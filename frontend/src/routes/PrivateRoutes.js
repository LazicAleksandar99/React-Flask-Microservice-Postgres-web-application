import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PrivateRoutes = () =>{
    let auth = {'token': true}
  return (
      auth.token ? <div><Navbar/> <Outlet/> </div>: <Navigate to="/signin"/>
  );
}
export default PrivateRoutes;