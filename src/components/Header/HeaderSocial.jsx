import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href=" https://www.linkedin.com/in/ankit-patel-4b978a1b2 " target="_blank"><BsLinkedin/></a>
        <a href=" https://github.com/ " target="_blank"><BsGithub/></a>
        <a href="mailto:ankitspatel1711@gmail.com" target='__blank'><MdEmail/></a>
    </div>
  )
}

export default HeaderSocial