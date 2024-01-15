import React,{ useState } from 'react';
import './CSS/login.css';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import axios from "axios";


function Login(){
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    password:"",
  });
  
  const generateError = (err) =>
    toast.error(err,{
      position: "bottom-right",
    });
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const { data } = await axios.post("https://aakashserver.onrender.com/login",{
        ...values,
      },{
        withCredentials:true,
      });
      // console.log(data);
      if(data){
        if(data.errors){
          const {email,password} = data.errors;
          if(email) generateError(email);
          else if(password) generateError(password);
        }
        else{
          if(data.user.role==='admin'){
            console.log("Hello 36");
            navigate('/admin', { state: { user: { _id: data.user._id, role: data.user.role,name:data.user.name } } });
          }
          else{
            console.log("Hello 39");
            navigate('/query', { state: { user: { _id: data.user._id, role: data.user.role,name:data.user.name } } });
          }
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
          <h1>Login</h1>
          
          <div className="infm">
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
          <button>Login</button>
         <a href="/register">Register</a>
        </form>
        <ToastContainer/>
      </div>
    </div>
    
  )
}


export default Login
