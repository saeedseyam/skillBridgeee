import React from 'react'
import './Program.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program-3-C0g4YULi.png'
import programIcon1 from '../../assets/programIcon1.png'
import programIcon2 from '../../assets/programIcon2.png'
import programIcon3 from '../../assets/programIcon3.png'
const programs = () => {
  return (
    <div className='Programs' >
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={programIcon1} alt="" />
          <p>Graduation Degree </p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={programIcon2} alt="" />
          <p>Master Degree </p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={programIcon3} alt="" />
          <p>poster Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default programs
