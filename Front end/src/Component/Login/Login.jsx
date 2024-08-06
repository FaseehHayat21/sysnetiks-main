import React, { useState, useEffect } from 'react'
import "./Login.css"
import loginimage from  "../../assets/login.jpg"
import { useNavigate } from 'react-router-dom';
export default function Login() {


  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:1000/api/auth/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: email, password: password})
      });
      const json = await response.json()
      console.log(json)
      if (json.success){
          console.log(json.authtoken);
          console.log(json.userRole);
          console.log(json.access);
          console.log("Login Succesfull")
          localStorage.setItem('token', json.authtoken); 
          localStorage.setItem('role', json.userRole); 
          localStorage.setItem('access', json.access); 
          
          navigate("/welcome");
      }
      else{
          alert("Invalid credentials");
      }

  }
  return (
        <>
        <div className="login">
            <div className='login-image '>
                <img className='img-login img-fluid' src={loginimage} alt="" />
            </div>
        <form className='login-form' onSubmit={handleSubmit}>
                <div className="heading-login">
                    <h3 className='heading-login'>Login</h3>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name="email" aria-describedby="emailHelp" required className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}  name="password"  required />
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                    
                    </div>

                    <div className="col">

                    <a href="#!">Forgot password?</a>
                    </div>
                </div>


                <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    
                </div>
        </form>
        </div>
        {/* <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          <div data-mdb-input-init className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg button-login"
            >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</section> */}
        </>
  )
}
