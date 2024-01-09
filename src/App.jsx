import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Careers from './Components/Careers';
import Query from './Components/Query';
import Courses from './Components/Courses';
//import './App.css'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme?current_theme:'light');

  useEffect(() =>{
     localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Careers />} />
          <Route path='/query' element={<Query />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
