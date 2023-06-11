import { Link } from "react-router-dom"
import "./tripPlanner.css"

const MailList = () => {
  return (
    <div className="trip">
      <h1 className="tripTitle">Plan your Journey!</h1>
      <span className="tripDesc">To have a unforgettable journey</span>
      <div className="tripInputContainer">

      <Link to="/TripPlanner" className="hostInputContainer"  >
      <button >Click here to Start</button>

          </Link>
       
      </div>
    </div>
  )
}

export default MailList