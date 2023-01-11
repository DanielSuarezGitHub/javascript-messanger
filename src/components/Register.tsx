import React from "react";
import upload from '../assets/upload.svg'

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MESSENGER</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="User Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={upload} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
