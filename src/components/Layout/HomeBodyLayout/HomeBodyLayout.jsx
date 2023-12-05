import { useEffect, useRef, useState } from "react"
import Navbar from "../../HOC/Navbar/Navbar"

const HomeBodyLayout = props => {
  const navbarRef = useRef()
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries?.[0]
      setIsVisible(entry?.isIntersecting)
    })
    observer.observe(navbarRef.current)
  },[])

  return (
    <div className="home-layout">
      <nav ref={navbarRef}>
        <Navbar isVisible={isVisible}/>
      </nav>
        <section className="body-main" style={{marginTop: props.touchTop ? '0' : ''}}>
            {props?.children}
        </section>
    </div>
  )
}

export default HomeBodyLayout