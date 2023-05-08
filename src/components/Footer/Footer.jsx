import React from 'react'
import './footer.css'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>SAMBANDH</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com/akki.patel.39982" target="_blank"> <FaFacebookMessenger/></a>
        <a href=" https://linkedin.com/ " target="_blank"><BsLinkedin/></a>
        <a href=" https://github.com/ " target="_blank"><BsGithub/></a>
      </div>

      <div className='footer_copyright'>
            <small>&copy; SAMBANDH Creaters. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer