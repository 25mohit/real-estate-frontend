import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { RiParkingBoxFill } from "react-icons/ri";
import { MdBedroomParent } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListingCard = ({showCard}) => {
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        },Number(`${showCard}00`)+200)
    },[])

    const navigateToDetail = () => {
        navigate('real-state-detail/454')
    }
    console.log("show", show, showCard);
  return (
    <div className="listing-card" style={{opacity:show? '1' : '0', transition:show ? '1s' : ''}}>
        <div className="img-container">
            <img src="./Assets/building.jpg" alt="" />
            <span className="location-chip">
                <FaLocationDot /> Rajasthan
            </span>
            <FaAngleRight id="enter-icon" onClick={navigateToDetail}/>
        </div>
        <div className="stats-container">
            <div>
                <h4>The Old vintage house</h4>
                <h4 className="price">$180,000</h4>
            </div>
            <div>
                <div>
                    <span>
                        <RiParkingBoxFill />
                        2
                    </span>
                    <span>
                        <MdBedroomParent />
                        4
                    </span>
                </div>
                <span>sqft. 2000</span>
            </div>
        </div>
    </div>
  )
}

export default ListingCard