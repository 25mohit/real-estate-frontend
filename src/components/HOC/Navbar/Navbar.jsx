import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isVisible }) => {
  const navigate = useNavigate()

  const onSignupHandler = () => {
    navigate('/user-login')
  }
  
  return (
    <div className={`navbar ${ !isVisible ? 'show' : ''}`}>
      <div className="logo" onClick={() => navigate('/')}>
        <MdOutlineMapsHomeWork id="logo-main"/>
        <h3>Real-Estate</h3>
      </div>
      <div className="items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="">Featured</Link></li>
          <li><Link to="">Services</Link></li>
          <li><Link to="">Explore</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
        <button className='btn contained' onClick={onSignupHandler}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar