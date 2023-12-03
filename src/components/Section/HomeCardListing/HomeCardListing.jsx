import { useState } from "react"
import BradCrumpBar from "../../Utils/BradCrumpBar/BradCrumpBar"
import ListingCard from "../../Utils/ListingCard/ListingCard"

const HomeCardListing = () => {
    const [activeOpt, setActiveOpt] = useState('home')

  return (
    <div className='home-listing'>
        <BradCrumpBar activeOpt={activeOpt} setActiveOpt={setActiveOpt}/>
        <section>
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </section>
    </div>
  )
}

export default HomeCardListing