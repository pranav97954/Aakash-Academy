import React,{ useState } from 'react';
import './CSS/login.css';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import axios from "axios";


function Register(){
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email:"",
    password:"",
    role:"user",
  });
  const generateError = (err) =>
    toast.error(err,{
      position: "bottom-right",
    });
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const { data } = await axios.post("https://aakashserver.onrender.com/register",{
        ...values,
      },{
        withCredentials:true,
      });
      //console.log(data);
      if(data){
        if(data.errors){
          const {email,password} = data.errors;
          if(email) generateError(email);
          else if(password) generateError(password);
        }
        else{
          navigate('/about');
        }
      }else{
        console.log(data);
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className='login'>
      <div className="newform">
        <form className="formdiv" onSubmit={(e) =>handleSubmit(e)}>
          <h1>Register</h1>
          
          <div className="infm">
          <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={(e) =>
                setValues({...values,[e.target.name]:e.target.value})
              }
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) =>
                setValues({...values,[e.target.name]:e.target.value})
              }
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setValues({...values,[e.target.name]:e.target.value})
              }
            />
            
          </div>
          <button>Register</button>
         <a href="/login">Login</a>
        </form>
        <ToastContainer/>
      </div>
    </div>
    
  )
}


export default Register
