import React from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../context/authSlice';
import { clearUser } from '../context/user/userSlice';
import { apiSlice } from '../app/api/apiSlice';
import { clearProducts } from '../context/product/productSlice';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import SearchBar from './SearchBar';

const Navbar= () =>{

    const token = useSelector(selectCurrentToken) 
    const role = JSON.parse(atob(token.split('.')[1])).role
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
        dispatch(clearUser())
        dispatch(clearProducts())
        dispatch(apiSlice.util.resetApiState());
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary" aria-label="Fifth navbar example" style={{borderColor: "#0d6efd"}}>
                <div className="container-fluid">
                    <Link  className="navbar-brand" to="/home">LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-1">
                            <li className="nav-item">
                                <Link  className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/products">Products</Link >
                            </li>
                            {role == "admin" ? 
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/users">Users</Link >
                                </li>
                                : <div></div>
                            }            
                        </ul>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 py-1">
                            <SearchBar ></SearchBar>
                        </ul>
                        
                        <ul className="navbar-nav ms-auto py-1">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle"></i>
                                </Link>
                                <ul className="dropdown-menu  dropdown-menu-lg-end">
                                    <li><Link className="dropdown-item" to="/profile"><i className="bi bi-person-gear"> Profile</i></Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" onClick={handleLogOut}><i className="bi bi-box-arrow-right"> Log off</i></Link></li>
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;