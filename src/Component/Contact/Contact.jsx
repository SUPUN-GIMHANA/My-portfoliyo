import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg';
import blue from '../../assets/blue.gif';
import me from '../../assets/me.jpg';
const Contact = () => {
  return (
    <div>

      <div className='topBar'>
        <div className='name'>
          <p className='nameA'>SUPUN GIMHANA</p>
        </div>
        
        <div className='bar'>
          <div className='head'>
            <div className='topic'><Link to="/Navbar" className='link'>Home</Link></div>
            <div className='topic co'><Link to="/About" className='link'>About</Link></div>
            <div className='topic'><Link to="/Project" className='link'>Project</Link></div>
            <div className='topic co'>Contact</div>
            {/* <img src={backgroundImg} alt="background" className='background' /> */}
          </div>
        </div>
        
        <div className='mode'>
          <div className='mode1'>
            <div className='dark'></div>
          </div>
        </div>
        
      </div>
      <div className='box'>
        <div className='k'>
          <div className='name1 nameColour'>Contact <span>me</span></div>
          <img src={backgroundImg} alt="background" className='background' />
        </div>
      </div>

      <div className="contact">
        <div className="1t">
          <div className="fullName">*******</div>
          <div className="email">***</div>
        </div>
      </div>

      <div className='blueContainer'>
        <img src={blue} alt="blue" className='size' />
        <div className='circleOverlay'></div>
        <img src={me} alt="me" className='me' />
      </div>
   
      


    </div>
  )
}

export default Contact