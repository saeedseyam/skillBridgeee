import React, { useRef } from 'react'
import './Testimonials.css'
import nextIcon from '../../assets/nextIcon.png'
import backIcon from '../../assets/backIcon.png'
import user1 from '../../assets/program1.jpg'
import user2 from '../../assets/user-2-UK2CIdqi.png'
import user3 from '../../assets/program2.jpg'
import user4 from '../../assets/user-4-njZdDe5j.png'
const Testimonials = () => {
    const slider = useRef ();
    let tx = 0;
    const SlideForward = ()=>{
        if(tx > -50){
            tx = tx - 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const SlideBackward = ()=>{
        if(tx < 0){
            tx = tx + 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='Testimonials' >
      <img src= {nextIcon} alt="" className='next-btn' onClick={SlideForward} />
      <img src= {backIcon} alt="" className='back-btn' onClick={SlideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, 
                        state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities,
                         and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
