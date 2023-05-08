import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'


const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio-container'>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG1} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <div className='portfolio_item-cta'>
              <a href="https://github.com/" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG2} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <div className='portfolio_item-cta'>
              <a href="https://github.com/" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG3} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <div className='portfolio_item-cta'>
              <a href="https://github.com/" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG4} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG5} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <div className='portfolio_item-cta'>
              <a href="https://github.com/" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG6} alt=""/>
            </div>
            <h3>This is Portfolio item title</h3>
            <div className='portfolio_item-cta'>
              <a href="https://github.com/" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com/shots/21307284-Earn-steps-mobile-app" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        </div>
      </section>
  )
}

export default Portfolio