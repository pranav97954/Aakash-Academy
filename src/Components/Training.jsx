import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/form.css";

const serverURL = "https://aakashserver.onrender.com";

const Training = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [project,setProject] = useState("");
  const [duration,setDuration] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${serverURL}/trainingfm`, { fname, lname , email , project, duration, contact })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      });
      
  };
    return (
      <div className="carrers">
        <div className="newform">
          <form onSubmit={handleSubmit} className="formdiv">
            <h1>Register Now For Training</h1>
            <div className="infm">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="project"
              name="project"
              onChange={(e) => setProject(e.target.value)}
            />
            <input
              type="text"
              placeholder="Duration"
              name="duration"
              onChange={(e) => setDuration(e.target.value)}
            />
            <input
              type="number"
              placeholder="Contact"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
            <button>Register</button>
          </form>
        </div>
  
      </div>
    )
}

export default Training

