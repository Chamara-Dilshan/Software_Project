import { Link } from "react-router-dom"
import "./tripPlanner.css"

const MailList = () => {
  return (
    <div className="trip">
      <h1 className="tripTitle">Plan your Journey!</h1>
      <span className="tripDesc">To have a unforgettable journey</span>
      <div className="tripInputContainer">

      <Link to="/TripPlanner" className="hostInputContainer"  >
      <button
  style={{
    transition: "transform 0.3s",ontSize: "20px", padding: "10px 20px" }}

  onMouseOver={(e) => {
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "scale(1)";
  }}
>
  Click here to Start
</button>

          </Link>
       
      </div>
    </div>
  )
}

export default MailList