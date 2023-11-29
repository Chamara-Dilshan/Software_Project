import "./hostItem.css"
import React from "react"
import { Link } from "react-router-dom"

const MailList = () => {
  return (
    <div className="host">
      <h1 className="hostTitle">List your Properties</h1>
      <span className="hostDesc">Sign up and start to list</span>
      <div className="hostInputContainer">
    

        <Link to="/user/login" className="hostInputContainer"  >
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