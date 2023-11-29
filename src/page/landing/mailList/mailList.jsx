import "./mailList.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const MailList = () => {
  const form = useRef();
  const inputRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u01hwjl", // UserID
        "template_vsbt0tb", // TemplateID
        form.current,
        "UE0eZNwSeq1erFdVZ" // EmailID
      )
      .then(() => {
        // Clear the input field after the email is sent
        inputRef.current.value = "";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="mail">
      <form ref={form}>
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="user_email"
            ref={inputRef}
          />
          <button
            onClick={sendEmail}
            style={{ fontSize: "20px", padding: "10px 20px" }}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default MailList;