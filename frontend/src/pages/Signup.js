import React,  { useState, useRef, useEffect, } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css"
import "../assets/styles/Signup.css"
import { useRegistrationMutation } from '../context/registrationApiSlice';


const SignUp= () =>{
  
  const nameRef = useRef();
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [birthday, setBirthday] = useState(new Date());

  const [register, { isLoading }] = useRegistrationMutation()

  
  useEffect(() => {
    nameRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await register({name, last_name, email, birthday, password})

      if(response?.data[0]?.error){
        alert(response?.data[0]?.error)
      }
      else{
        alert(response?.data[0]?.registered)
        navigate('/signin')
      }

    }catch(errorMsg){
      console.log("u kecu sam")
      if (!errorMsg?.response) {
      } else if (errorMsg.response?.status === 400) {
          alert('Missing Username or Password')
      } else if (errorMsg.response?.status === 401) {
          alert('Unauthorized')
      } else {
          alert('Login Failed')
      }
    }
  }

  const content = isLoading ? <h1>Loading...</h1> : (
    <div className='bg-image'>
      <section className="vh-100 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="text" 
                              id="form3Example1c" 
                              className="form-control" 
                              ref={nameRef}  
                              value={name} 
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your First Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>  
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text" 
                              id="form3Example2c" 
                              className="form-control" 
                              value={last_name} 
                              onChange={(e) => setLastName(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example2c">Your Last Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="email" 
                              id="form3Example3c" 
                              className="form-control" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <DatePicker selected={birthday} onChange={(date) => setBirthday(date)} />
                            <label className="form-label" htmlFor="form3Example3c">Your Birthday</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="password" 
                              id="form3Example4c" 
                              className="form-control"
                              value={password} 
                              onChange={(e) => setPassword(e.target.value)} 
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                              type="password" 
                              id="form3Example4cd" 
                              className="form-control" 
                              value={passwordAgain} 
                              onChange={(e) => setPasswordAgain(e.target.value)} 
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <p>Already registered? <Link to="/signin" className="link-primary">Sign in here</Link></p>
                        </div>
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample pic"/>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return content
}
export default SignUp;