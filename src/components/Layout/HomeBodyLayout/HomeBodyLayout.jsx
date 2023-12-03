import { useEffect, useRef, useState } from "react"
import Navbar from "../../HOC/Navbar/Navbar"

const HomeBodyLayout = props => {
  const navbarRef = useRef()
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    // console.log(navbarRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries?.[0]
      setIsVisible(entry?.isIntersecting)
      console.log("entry", entry);
    })
    observer.observe(navbarRef.current)
  },[])

  return (
    <div className="home-layout">
      <nav ref={navbarRef}>
        <Navbar isVisible={isVisible}/>
      </nav>
        <section className="body-main">
            {props?.children}
        </section>
    </div>
  )
}

export default HomeBodyLayout