import React from 'react'
import './CSS/Navbar.css'
import logo_light from '../assets/Aakash_logo.png'
import logo_dark from '../assets/Aakash_logo.png'
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Navbar = ({theme, setTheme}) => {

  const toogle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light'); 
  }

  const showSidebar = () =>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };
  const closeSidebar = () =>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  };
  return (
    <nav>
    <div className='navbar'>
       <img src={theme == 'light' ? logo_light : logo_dark} alt=".." className='logo' />
        <ul className='sidebar'>
          <li onClick={closeSidebar}><img src={close} alt="close"/></li>
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/query">Query</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/login">Login</a></li>
          <li><img onClick={() => {toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="d-night" className='toggle-icon'/></li>
        </ul>

       <ul>
        <li className='hideOnMobile'><a href="/">Home</a></li>
        <li className='hideOnMobile'><a href="/courses">Courses</a></li>
        <li className='hideOnMobile'><a href="/about">About</a></li>
        <li className='hideOnMobile'><a href="/query">Query</a></li>
        <li className='hideOnMobile'><a href="/career">Career</a></li>
        <li className='hideOnMobile'><a href="/login">Login</a></li>
        <li className='menu-btn' onClick={showSidebar}><img src={menu} alt="menu"/></li>
       </ul>

        <div className="search-box hideOnMobile">
            <input type="text" placeholder='Search'/>
            <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="..." />
        </div>

        <img className='toggle-icon hideOnMobile' onClick={() => {toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="d-night" />
    </div>
    </nav>
  )
}

export default Navbar
