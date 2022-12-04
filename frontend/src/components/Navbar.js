import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () =>{
  //let navigate = useNavigate()

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Fifth navbar example">
            <div className="container-fluid">
            <Link  className="navbar-brand" to="/home">LOGO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/products">Products</Link >
                </li>
                </ul>
                <form role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
            </div>
        </nav>
    </div>
  );
}
export default Navbar;