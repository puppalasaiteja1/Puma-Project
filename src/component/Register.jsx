import React, { useState } from 'react'
import "../component/register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
 
    let [email,setEmail]=useState("");
    let [name,setname]=useState("");
    let [password,setPassword]=useState("");

    let useNav=useNavigate()
  
    let userData=(e)=>{
        e.preventDefault();
        
       if (email === "" || password === "" || name==="") {
             alert("Please enter Valid details");
               return;
           }

        let payload=                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        {
        email,
        name,
        password 
        }

        
        axios.post("http://localhost:8080/addUser",payload)
        .then(()=>{
            console.log("suc");
            useNav("/login")
            
        })
        .catch(()=>{
            console.log("error");
            
        })
         
    }

  return (
      <div className="center-page">
            <div className="form-container">
      <p className="title">Register Now</p>

      <form className="form" onSubmit={userData}>
        <input type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" className="input" placeholder='UserName' onChange={(e)=>setname(e.target.value)}/>
        <input type="password" className="input" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
        
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>

      </div>
    </div>
  
  )
}

export default Register