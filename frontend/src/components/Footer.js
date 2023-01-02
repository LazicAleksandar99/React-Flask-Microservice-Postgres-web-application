import React from 'react';

import "../assets/styles/Footer.css"

const Footer= () =>{

  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>Logo</h4>
            <br></br>
          <h5 className="list-unstyled">
            <li>+381 64 123 1283</li>
            <li>Novi Sad, Serbia</li>
            <li>Kost Racina 23</li>
            <br></br>
            <br></br>
          </h5>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Staff</h4>
            <br></br>
          <div className="list-unstyled">
            <li>Aleksandar Lazic</li>
          </div>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>Social media</h4>
            <br></br>
          <div className="list-unstyled">
            <li><i className="bi bi-facebook"> </i> facebook</li>
            <li><i className="bi bi-instagram"></i> instagram</li>
            <li><i className="bi bi-youtube"></i> youtube</li>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} LOGO | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
  );
}
export default Footer;