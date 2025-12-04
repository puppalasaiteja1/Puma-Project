import React, { useState } from "react";
import "../component/login.css"
import {Link, useNavigate} from "react-router-dom" 
import axios from 'axios'
import {toast } from 'react-toastify';

const Login = () => {
   let[email,setEmail]=useState("");
   let[password,setPassword]=useState("");

   let navTo=useNavigate();

  let loginData=(e)=>{
    e.preventDefault();
        
    let payload={
      email,
      password
    }

    axios.post("http://localhost:8080/loginUser",payload)
    .then((result)=>{
      console.log(result.data);
       if (result.data === true) {
          toast.success("Login Success")
          sessionStorage.setItem("isLogin", "true");
          navTo("/")
        } else {
          toast.success("Invalid Credentials");
        }
      
    })
    .catch(()=>{
      console.log("error");
      
    })
     
     
  }
  
  return (
     <div className="center-page">
            <div className="form-container">
      <p className="title">Welcome back</p>

      <form className="form" onSubmit={loginData}>
        <input type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>

      <p className="sign-up-label">
        Don't have an account?
        
        <Link to={"/register"}><span className="sign-up-link">Sign up</span></Link>
      </p>
      </div>
    </div>
  
  );
};

export default Login;
