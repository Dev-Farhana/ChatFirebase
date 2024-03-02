import React from 'react';
import {auth} from "../firebase";
import {GoogleAuthProvider , signInWithRedirect } from "firebase/auth";
// import {signInWithEmailAndPassword } from "firebase/auth";

import Logo from "../assets/react.svg";

function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  // const googleSignIn = () => {
  //   const provider = new signInWithEmailAndPassword();
  //   signInWithRedirect(auth, provider);
  // }; 

  return (
    <div className='welcome'>
      <h2>Welcome to React Chat.</h2>
      <img src={Logo} alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button  onClick={googleSignIn}>
        Sign with Google 
      </button>
    </div>
  )
}

export default Welcome;