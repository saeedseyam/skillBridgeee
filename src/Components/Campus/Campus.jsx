import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallayr1.jpg'
import gallery2 from '../../assets/gallayr2.jpg'
import gallery3 from '../../assets/gallayr3.jpg'
import gallery4 from '../../assets/gallayr4.jpg'
import arrow from '../../assets/arrow.png'
const Campus = () => {
  return (
    <div className='Campus'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className='btn'>See more here <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Campus
