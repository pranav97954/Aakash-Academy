import React ,{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CSS/login.css';

const serverURL = 'http://localhost:5173';

function Login(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${serverURL}/login`, { email, password })
      .then(result => {
       // console.log(result.data);
  
        if (result.data.status === "Success") {
          const user = result.data.user;
          const userRole = user?.role;
  
          if (userRole === "admin") {
            navigate('/upload');
          } else {
            navigate('/view');
          }
        } else {
          navigate('/');
         // console.error('Login failed:', result.data.status);
        }
      });
      
  };
  const handleSignUpClick = () => {
    const cnt = document.getElementById('cntainer');
    cnt.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
    const cnt = document.getElementById('cntainer');
    cnt.classList.remove('right-panel-active');
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post(`${serverURL}/login`, { name, email, password })
  .then(result => {
    //console.log(result.data)
    navigate('/login'); 
  });
  
  };

  return (
    <div className='login'>
      <div className="fmbd">
        <div className="cnt" id="cntainer">

          <div className="form-cnt sign-up-cnt">
            <form className='fm' onSubmit={handleRegisterSubmit}>
              <h1>Create Account</h1>
              <span>Use your email for registration</span>
              <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}  />
              <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
              <button>Sign Up</button>
            </form>
          </div>

          <div className="form-cnt sign-in-cnt">
            <form className='fm' onSubmit={handleSubmit}>
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          
          <div className="overlay-cnt">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us, please login with your personal info</p>
                <button className="ghost" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                 <h1>Hello, Friend!</h1>
                 <p>Enter your personal details and start your journey with us</p>
                 <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}


export default Login
