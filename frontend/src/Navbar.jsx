import React from 'react'
import { BiAccessibility,BiAlarmAdd  } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='logo'><a href="/">👌</a></div>
      <div className="menu-items">
        <div className='nav-butt'><a href="/create" ><BiAccessibility /></a></div>
        <div className='nav-butt'><a href="/" ><BiAlarmAdd  /></a></div>
      </div>
    </div>
  )
}

export default Navbar;