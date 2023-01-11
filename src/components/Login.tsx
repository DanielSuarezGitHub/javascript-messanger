import React from 'react'

export default function Login() {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">MESSENGER</span>
      <span className="title">Log In </span>
      <form>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <button>Login</button>
      </form>
      <p>You don't have an account? Sign Up</p>
    </div>
  </div>
  )
}
