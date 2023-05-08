import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
     <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience_container'>
          <div className='primary_container'>
            <h3>Primary</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
               <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>JQUERY</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
               <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              {/* <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>RESPONSIVE  DESIGN</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article> */}
            </div>
          </div>
          <div className='framework_container'>
          <h3>Frameworks</h3>
            <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>BOOSTRAP</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>TAILWIND</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>SASS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>WORDPRESS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
            </div>
          </div>
          <div className='library_container'>
            <h3>Library</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>REACT JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
          </div>
          <div className='tools_container'>
            <h3>Tools</h3>
            <div className='experience_content'>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>VS CODE</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>ATOM</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Brackets</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4> Sublime Text</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
            </div>
          </div>
        </div>
     </section>
  )
}

export default Experience