import React from 'react';
import "../assets/styles/Footer.css"

const Footer= () =>{

  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <h4>LOGO</h4>
          <h3 className="list-unstyled">
            <li>+381 64 123 1283</li>
            <li>Novi Sad, Serbia</li>
            <li>Kost Racina 23</li>
            <br></br>
          </h3>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Staff</h4>
          <ui className="list-unstyled">
            <li>Aleksandar Lazic</li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>Social media</h4>
          <ui className="list-unstyled">
            <li><i class="bi bi-facebook"> </i> facebook</li>
            <li><i class="bi bi-instagram"></i> instagram</li>
            <li><i class="bi bi-youtube"></i> youtube</li>
          </ui>
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