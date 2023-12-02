import HomeBodyLayout from "../../Layout/HomeBodyLayout/HomeBodyLayout"
import Hero from "../../Section/Hero/Hero"
import StatsBar from "../../Section/StatsBar/StatsBar"

const Home = () => {
  return (
   <HomeBodyLayout>
      <Hero />
      <StatsBar />
   </HomeBodyLayout>
  )
}

export default Home