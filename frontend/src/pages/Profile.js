import React from 'react';
import '../assets/styles/Profile.css'
const Profile= () =>{

  return (
    <div className="container rounded bg-white" style={{marginTop: "10%", marginBottom: "8%"}}>
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                <div className="font-weight-bold" style={{color: 'black'}}>Mi familija</div>
                <div className="text-black-50" style={{color: 'black'}}>sdass@google.com</div>
                {/* <div className="font-weight-bold" style={{color: 'black'}}>{sessionStorage.getItem("name")}</div>
                <div className="text-black-50" style={{color: 'black'}}>{sessionStorage.getItem("mail")}</div>
                <br></br>
                {sessionStorage.getItem('verification') == 'false' ?
                <div className="mt-5 text-center">
                        <GoUnverified style={{background: 'white',color:'black', width:'25px', height:'25px'}}/>
                        <p></p>
                        <button onClick={verifyButton} className="btn btn-primary profile-button" >Verify account</button>
                </div>
                :
                <div>
                    <GoVerified style={{background: 'white',color:'black', width:'25px', height:'25px'}}/>
                </div>
                } */}

            </div>
        </div>
        <div className="col-md-6 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
               <form className="formFields">
                    <div className="row mt-2">
                        <div className="col-md-6">
                          <label className="labels">Name</label>
                          <input type="text" name="name" required className="form-control" placeholder="first name" />
                        </div>
                        <div className="col-md-6">
                          <label className="labels">Last name</label>
                          <input type="text" name="last_name" required className="form-control"  placeholder="last name"/>
                          </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 mt-2">
                          <label className="labels mb-2">Birthday</label>
                          <input type="text" name="address" required className="form-control" placeholder="address"/>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="labels mt-1 mb-2">Email</label>
                          <input type="email" name="mail" required className="form-control" placeholder="email"/>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="labels mt-1 mb-2">Password</label>
                          <input type="password" name="password" required className="form-control" placeholder="password"/>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="labels mt-1 mb-2">Confirm password</label>
                          <input type="password" name="second_password" required className="form-control" placeholder="confirm password" />
                        </div>
                    </div>
                    <br></br>
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary profile-button" >Save profile</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}
export default Profile;