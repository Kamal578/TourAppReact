import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


export default function NavItems() {
  const [curr, setCurr] = useState(1);

  return (
    <div className="hidden space-x-6 md:flex">
    <NavLink exact to={'/'} onClick={() => setCurr(1)}  className={`header-link ${curr === 1 && 'border-green'}`}>Home</NavLink>
    <NavLink exact to={'/tours'} onClick={() => setCurr(2)}   className={`header-link ${curr === 2 && 'border-green'}`}>Tours</NavLink>
    <NavLink exact to={'/gallery'} onClick={() => setCurr(3)}   className={`header-link ${curr === 3 && 'border-green'}`}>Gallery</NavLink>
    <NavLink exact to={'/whyUs'} onClick={() => setCurr(4)}   className={`header-link ${curr === 4 && 'border-green'}`}>Why us</NavLink>
    <NavLink exact to={'/contact'} onClick={() => setCurr(5)}   className={`header-link ${curr === 5 && 'border-green'}`}> Contact</NavLink>
    </div>
  )
}
