import HomeBodyLayout from "../../Layout/HomeBodyLayout/HomeBodyLayout"
import Hero from "../../Section/Hero/Hero"
import HomeCardListing from "../../Section/HomeCardListing/HomeCardListing"
import StatsBar from "../../Section/StatsBar/StatsBar"

const Home = () => {
  return (
   <HomeBodyLayout>
      <Hero />
      <StatsBar />
      <HomeCardListing />
   </HomeBodyLayout>
  )
}

export default Home