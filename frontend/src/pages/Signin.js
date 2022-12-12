import React, { useRef, useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../assets/styles/Signin.css';
import axios from '../api/axios';
//import useAuth from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../context/authSlice';
import { useLoginMutation } from '../context/authApiSlice';

const SIGNIN_URL = '/sign/in';

const SignIn= () =>{

  //const { setAuth } = useAuth();
  const emailRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    emailRef.current.focus();
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      // console.log('pokusaj trja')
      // const response = await axios.post(SIGNIN_URL,
      //   JSON.stringify({ email, password }),
      //   {
      //       headers: { 'Content-Type': 'application/json' }
      //   }
      // );
      
      // if(response?.data[0]?.error){
      //   alert(response?.data?.error)
      //   console.log(response?.data?.error);
      // }
      // else{
      //   const token = response?.data?.token ? response.data.token : undefined;
      //   localStorage.setItem('token', token);

      //   setAuth({ email, token });
      //   setEmail('');
      //   setPassword('');

      //   if(response?.data?.token){
      //     navigate(from, {replace: true})
      //   }
      // }


      console.log('prije')
      const response = await login({email,password})
      // const response = await axios.post(SIGNIN_URL,
      //   JSON.stringify({ email, password }),
      //   {
      //       headers: { 'Content-Type': 'application/json' },
              ////withCredentials: true
      //   }
      // );

      console.log('poslje')
      console.log(response?.data)
      dispatch(setCredentials({...response?.data}))
      setEmail('')
      setPassword('')
      navigate('/home')

    } catch(errorMsg){
      //moram ovdje ivdjet koji erori
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
    <div className='text-center'>
       <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 mt-3 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color:"#709085"}}></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <div className="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-1 pt-5 pt-xl-0 mt-xl-n5">
                <form onSubmit={handleSubmit} style={{width:"23rem"}}>

                  <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log in</h3>

                  <div className="form-outline mb-4">
                    <input 
                      ref={emailRef} 
                      type="email" 
                      id="emailID" 
                      className="form-control form-control-lg" 
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <label className="form-label" htmlFor="emailID">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="password" 
                      id="passwordID" 
                      className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password}
                      required
                    />
                    <label className="form-label" htmlFor="passwordID">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <p>Don't have an account? <Link to="/signup" className="link-primary">Register here</Link></p>

                </form>
              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login pic" className="w-100 vh-100" style={{objectFit: "cover", objectPosition: "left"}}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  return content
}
export default SignIn;