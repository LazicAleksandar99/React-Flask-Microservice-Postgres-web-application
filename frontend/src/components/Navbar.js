import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () =>{
  //let navigate = useNavigate()

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" aria-label="Fifth navbar example">
            <div className="container-fluid">
            <a  className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a  className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a  className="nav-link" href="#">Link</a >
                </li>
                <li className="nav-item">
                    <a  className="nav-link disabled">Disabled</a >
                </li>
                <li className="nav-item dropdown">
                    <a  className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                    <ul className="dropdown-menu">
                    <li><a  className="dropdown-item" href="#">Action</a></li>
                    <li><a  className="dropdown-item" href="#">Another action</a></li>
                    <li><a  className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
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