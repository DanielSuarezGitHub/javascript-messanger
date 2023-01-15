import upload from '../assets/upload.svg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, storage, db } from "../firebase"
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate()
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  async function handleForm(e){
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/')
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.log(err)
      setErr(true);
      setLoading(false);
    }

  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MESSENGER</span>
        <span className="title">Register</span>
        <form onSubmit={handleForm}>
          <input name="name" required type="text" placeholder="User Name" />
          <input name="email" required type="email" placeholder="Email" />
          <input name="password" required type="password" placeholder="Password" />
          <input name='photo' required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={upload} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}          
          {err && <span style={{color: 'red', fontWeight: 'Bold'}}>Something Went Wrong</span>}
        </form>
        <p>You do have an account? <Link to='/login'>Sign In</Link></p>
      </div>
    </div>
  );
}
