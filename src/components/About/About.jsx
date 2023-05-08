import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                    <img src={ME}/>
                </div>
            </div>

            <div className='about_content'>
              <div className='about_cards'>
                <article className='about_card'>
                  <FaAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                </article>

                <article className='about_card'>
                  <FiUsers className='about_icon'/>
                  <h5>Clients</h5>
                  <small>200+ World Wide</small>
                </article>

                <article className='about_card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>Projects</h5>
                  <small>10+ Completed Projects</small>
                </article>
              </div>
              <p>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About