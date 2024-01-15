import React, { useEffect, useState } from 'react';
import './CSS/admin.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const location = useLocation();
  const user = location.state && location.state.user;

  const [subjects, setSubjects] = useState([]);

  const [careerss,setCareerss] = useState([]);

  const [requirementt,setReuirementt] = useState([]);

  const [trainingg,setTrainingg] = useState([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate('/login');
      } else {
        try {
          const { data } = await axios.post(
            'https://aakashserver.onrender.com/admin',  //academy
            {},
            { withCredentials: true }
          );

          if (!data.status) {
            removeCookie('jwt');
            navigate('/login');
          } else {
            toast(`Hi ${data.user}`);
          }
        } catch (error) {
          console.error('Error verifying user:', error);
        }
      }
    };

    const fetchData = async () => {
        try {
          const { data } = await axios.get('https://aakashserver.onrender.com/adminview');
          setSubjects(data.subjects);
          setCareerss(data.careerss);
          setReuirementt(data.requirementt);
          setTrainingg(data.trainingg);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    fetchData();

    
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie('jwt');
    navigate('/');
  };

  return (
    <div className="admin">
      <h1>Admin</h1>
      <h1>
        Welcome -{user ? user.name : 'User'} Role-{user ? user.role : 'User'}!
      </h1>
      <button onClick={logout}>Log out</button>
      <ToastContainer />
      <div>
        <h2>Subjects List:</h2>
        <ul>
          {subjects.map(query => (
            <li key={query._id}>
              {query.fname} - {query.subject} - {query.contact}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Careers List:</h2>
        <ul>
          {careerss.map(career => (
            <li key={career._id}>
              {career.name} - {career.email} - {career.jobrole}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Training:</h2>
        <ul>
          {trainingg.map(training => (
            <li key={training._id}>
              {training.fname} - {training.project} - {training.contact}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Requirements List:</h2>
        <ul>
          {requirementt.map(requirement => (
            <li key={requirement._id}>
              {requirement.name} - {requirement.email} - {requirement.requirement} - {requirement.contact}-{requirement.location}
            </li>
          ))}
        </ul>
      </div>



    </div>
  );
};

export default AdminPanel;
