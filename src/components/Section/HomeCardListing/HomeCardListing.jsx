import { useEffect, useState } from "react"
import BradCrumpBar from "../../Utils/BradCrumpBar/BradCrumpBar"
import ListingCard from "../../Utils/ListingCard/ListingCard"
import { GrPrevious, GrNext } from "react-icons/gr";

const HomeCardListing = ({ reference,cardsShow }) => {
    const [activeOpt, setActiveOpt] = useState('home')
    const [box, setBox] = useState(null)

    useEffect(() => {
        const listingContainer = document.querySelector('.listing-container')
        setBox(listingContainer)
    },[cardsShow])

    const onPrev = () => {
        let width = box?.clientWidth
        box.scrollLeft = box?.scrollLeft - width
    }

    const onNext = () => {
        let width = box?.clientWidth
        box.scrollLeft = box?.scrollLeft + width
    }
    
  return (
    <div className='home-listing' ref={reference}>
        <BradCrumpBar activeOpt={activeOpt} setActiveOpt={setActiveOpt}/>
        {cardsShow && <section className="listing-container">
            {
               activeOpt === "home" && [1,2,3,4,5,6]?.map((dt, index) => {
                    return <ListingCard showCard={index} key={index}/>
                })
            }
            {
               activeOpt === "office" && [1,2,3]?.map((dt, index) => {
                    return <ListingCard showCard={index} key={index}/>
                })
            }
            {
               activeOpt === "commercial" && [1,2]?.map((dt, index) => {
                    return <ListingCard showCard={index} key={index}/>
                })
            }
            {
               activeOpt === "residential" && [1,2,3,4]?.map((dt, index) => {
                    return <ListingCard showCard={index} key={index}/>
                })
            }
        </section>}
        <div className="nav-bar">
            <GrPrevious onClick={onPrev} id="nav-icon"/>
            <GrNext onClick={onNext} id="nav-icon"/>
        </div>
    </div>
  )
}

export default HomeCardListing