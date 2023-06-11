import "./mailList.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const MailList = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u01hwjl", //UserID
        "template_vsbt0tb", //TemplateID
        form.current,
        "UE0eZNwSeq1erFdVZ"      ) //EmailID
      
  };
  return (
    
    <div className="mail">
      <form ref={form} >
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" name="user_email" />
        <button onClick={sendEmail}  value="Send">Subscribe</button>            
      
      </div>
      </form>
    </div>
  )
}

export default MailList