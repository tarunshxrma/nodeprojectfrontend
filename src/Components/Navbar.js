import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Components.css"
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {
  const[isMobile,setIsMobile]=useState(false);
  return (
    <>
    <div className='main-header'>
      <h1><span id="the">THE</span><span id="siren">SIREN</span></h1>
    </div>
    <div className={isMobile ? "nav-links-mobile" : "nav"} onClick={()=>{setIsMobile(false)}}>
        <NavLink to="/" activeclassname="active" className="links">Home</NavLink>
        <NavLink to="/Bollywood" activeclassname="active" className="links">Bollywood</NavLink>
        <NavLink to="/Technology" activeclassname="active" className="links">Technology</NavLink>
        <NavLink to="/Hollywood" activeclassname="active" className="links">Hollywood</NavLink>
        <NavLink to="/Fitness" activeclassname="active" className="links">Fitness</NavLink>
        <NavLink to="/Food" activeclassname="active" className="links">Food</NavLink>
    </div>
        <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
        {isMobile ? <RxCross2/> : <GiHamburgerMenu/> }
        </button>
    <div>
    <hr id="hr"></hr>
    </div>
  </>
  )
}

export default Navbar