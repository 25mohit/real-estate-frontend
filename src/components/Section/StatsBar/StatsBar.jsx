import { AiFillHome } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { IoMdTrophy } from "react-icons/io";

const StatsBar = () => {
  return (
    <div className="stats-bar">
        <section>
            <AiFillHome id="stats-icon"/>
            <div>
                <h3>140,000+</h3>
                <span>House listing avaiable</span>
            </div>
        </section>
        <section>
            <IoPeople id="stats-icon"/>
            <div>
                <h3>1M</h3>
                <span>Visitors each month</span>
            </div>
        </section>
        <section>
            <FaClock id="stats-icon"/>
            <div>
                <h3>$187,50</h3>
                <span>Avg  buyer savings</span>
            </div>
        </section>
        <section>
            <IoMdTrophy id="stats-icon"/>
            <div>
                <h3>#1</h3>
                <span>Resources for buying info</span>
            </div>
        </section>
    </div>
  )
}

export default StatsBar