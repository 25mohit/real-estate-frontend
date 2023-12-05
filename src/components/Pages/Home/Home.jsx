import { useEffect, useRef, useState } from "react"
import HomeBodyLayout from "../../Layout/HomeBodyLayout/HomeBodyLayout"
import Hero from "../../Section/Hero/Hero"
import HomeCardListing from "../../Section/HomeCardListing/HomeCardListing"
import StatsBar from "../../Section/StatsBar/StatsBar"

const Home = () => {
  const [cardsShow, setCardsShow] = useState(false)
  const cardsRef = useRef()
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries?.[0]
      setCardsShow(entry?.isIntersecting)
      console.log("entry", entry);
    })
    observer.observe(cardsRef.current)
  },[])

  return (
   <HomeBodyLayout>
      <Hero />
      <StatsBar />
      <HomeCardListing reference={cardsRef} cardsShow={cardsShow}/>
   </HomeBodyLayout>
  )
}

export default Home