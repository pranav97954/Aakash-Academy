import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/form.css";

const serverURL = "http://localhost:5173/";

const Careers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${serverURL}/career`, { name, email, jobrole, location, contact })
      .then((result) => {
        //console.log(result.data);
        navigate("/");
      });  
  };
  return (
    <div className="carrers">
    <div className="fm">
      <div className="carrerform">
        <form className="fm" onSubmit={handleSubmit}>
          <h1>Career in Aakash</h1>
          <span>Online & Offline</span>
          <div className="infm">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jobrole"
              name="jobrole"
              onChange={(e) => setJobrole(e.target.value)}
            />
            <input
              type="text"
              placeholder="location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
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

    </div>
  );
};

export default Careers;

