import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function ForgetPassword() {
    const [email,setEmail]= useState("");

    async function sendPasswordResetEmail(event){
        console.log(email);
        try
        {
            await axios.put("http://localhost:8088/api/v1/user/forget-password?email="+email);
            alert("password reset email successfully sent!");
            setEmail("");
        }
        catch (err){
            alert("Forget password process failed");
        }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required
                           value={email}
                           onChange={(event) =>
                           {
                               setEmail(event.target.value);
                           }}
                    />
                </p>
                <p>
                    <Link to="/">
                        <button id="sub_btn" type="submit" onClick={sendPasswordResetEmail}>Send password reset email</button>
                    </Link>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}