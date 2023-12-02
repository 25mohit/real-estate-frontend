import { useRef, useState } from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isVisible }) => {
  const navigate = useNavigate()
  

  const onSignupHandler = () => {
    navigate('/user-register')
  }
  
  return (
    <div className={`navbar ${ !isVisible ? 'show' : ''}`}>
      <div className="logo">
        <MdOutlineMapsHomeWork id="logo-main"/>
        <h3>Real-Estate</h3>
      </div>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>Featured</li>
          <li>Services</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
        <button className='btn contained' onClick={onSignupHandler}>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar