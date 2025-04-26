import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram,  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Designed and Developed by Narendar Banothu</p>
        <div className='footer-a'>
            <a href='https://github.com/Narendar85a' rel='github profile' ><FaGithub size={20} /></a>
            <a href='https://www.linkedin.com/in/narendar-banothu-897992260/' rel='linkedin profile' ><FaLinkedin size={20} /></a>
            <a href='https://www.instagram.com/narendar__banothu_/' rel='insta profile' ><FaInstagram size={20} /></a>
            <a href='https://www.naukri.com/mnjuser/profile' rel='naukari profile'>Naukari</a>

        </div>
    </div>
  )
}

export default Footer