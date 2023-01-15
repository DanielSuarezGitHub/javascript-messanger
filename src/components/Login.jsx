import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">MESSENGER</span>
      <span className="title">Log In </span>
      <form onSubmit={handleSubmit}>
        <input name='email' required type="email" placeholder="Email" />
        <input name='password' required type="password" placeholder="Password" />
        <button type='submit'>Login</button>
        {err && <span>Error Logging In</span>}
      </form>
      <p>You don't have an account? <Link to='/register'>Sign Up!</Link></p>
    </div>
  </div>
  )
}
