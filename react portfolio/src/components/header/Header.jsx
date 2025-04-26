import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-div'>

   <div className='header-div2'>
    <div className='header-link1'>
     <Link to='/' style={{fontSize:'25px'}}>NB.</Link>
    </div>
    
    <div className='header-link2'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resume'>Resume</Link>
    </div>
   </div>

   <div>
     
   </div>
    
        

    </div>
  )
}

export default Header