import React from 'react';
import {auth} from "../firebase";
import {GoogleAuthProvider , signInWithRedirect } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

function Navbar() {
  const [user] = useAuthState(auth);
  
  const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
  };

  const signOut = () =>{
    auth.signOut() ;
  };
  
  return (
    <div className='nav-bar'>
      <h1> React Chat </h1>
      { user ? (<button  onClick={signOut} className="sign-out"> Sign Out </button> )  
        :  ( <button onClick={googleSignIn} className="sign-in"> Sign In </button> )
      }
    </div>
  )
}

export default Navbar;