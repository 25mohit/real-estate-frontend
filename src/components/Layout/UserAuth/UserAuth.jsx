import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const UserAuth = props => {
  const [currentAuth, setCurrentAuth] = useState('')

  useEffect(() => {
    const currentState = window.location.href?.split('/')?.[3]
    if(currentState === "user-login") setCurrentAuth('login')
    else setCurrentAuth('register')
  },[])

  const navigate = useNavigate()

  const onRedirectHandler = (value) => {
    navigate(`/${value}`)
  }

  return (
    <div className="user-auth">
      <div className="hero-image">
        <img src="./Assets/building.jpg" alt="Hero Section image of a Building" />
      </div>
      <div className="form">
        <div className="bar">
          <button className={`btn ${currentAuth === 'login' ? 'text' : 'bordered'}`} onClick={() => currentAuth !== 'login' ? onRedirectHandler('user-login') : null }>Login</button>
          <button className={`btn ${currentAuth === 'register' ? 'text' : 'bordered'}`} onClick={() => currentAuth !== 'register' ? onRedirectHandler('user-register') : null}>Create Account</button>
        </div>
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default UserAuth