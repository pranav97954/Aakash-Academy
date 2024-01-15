import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Careers from './Components/Careers';
import Query from './Components/Query';
import Courses from './Components/Courses';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Registernow from './Components/Registernow';
import Book from './Components/Book';
import AdminPanel from './Components/AdminPanel';
import Training from './Components/Training';

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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registernow' element={<Registernow />} />
          <Route path='/book' element={<Book />} />
          <Route path='/admin' element={<AdminPanel />} />
          <Route path ='/trainingform' element={<Training />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
