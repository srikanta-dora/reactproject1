import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='container'>
    <div align='right' className=' pr-14' >
    <NavLink className='header-menu m-3' to="/">Home</NavLink>
    <NavLink className='header-menu m-3' to="/about">About</NavLink>
    <NavLink className='header-menu m-3' to="/contact">Contact</NavLink> 
    </div>
    </div>
  )
}

export default Navigation
