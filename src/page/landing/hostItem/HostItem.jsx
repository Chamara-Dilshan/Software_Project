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
      <button >Click here to Start</button>
      </Link>
      </div>
    </div>
  )
}

export default MailList