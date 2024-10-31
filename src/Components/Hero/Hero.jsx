import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero container'> 
        <div className="hero-text ">
        <h1>Empowering Minds for a Brighter Future</h1>
        <p>Our innovative curriculum equips students with the knowledge, skills, and experiences essential for success in today’s 
          evolving educational landscape.
        </p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
