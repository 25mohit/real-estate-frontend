import { useEffect, useState } from "react"
import BradCrumpBar from "../../Utils/BradCrumpBar/BradCrumpBar"
import ListingCard from "../../Utils/ListingCard/ListingCard"

const HomeCardListing = () => {
    const [activeOpt, setActiveOpt] = useState('home')
    const [box, setBox] = useState(null)

    useEffect(() => {
        const listingContainer = document.querySelector('.listing-container')
        setBox(listingContainer)
    },[])

    const onPrev = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
        console.log(width);
    }
    const onNext = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
        console.log(width);
    }
  return (
    <div className='home-listing'>
        <BradCrumpBar activeOpt={activeOpt} setActiveOpt={setActiveOpt}/>
        <section className="listing-container">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
        </section>
        <div className="nav-bar">
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default HomeCardListing