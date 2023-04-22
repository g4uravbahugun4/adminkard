import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from 'react'
import { authentication, database } from '../firebaseConfig'
import {registerUser} from '../utils/auth'

function index() {
  const provider = new GoogleAuthProvider();
  const[sucess,setSucess]=useState(false)
  const[userInfo,setuserInfo]=useState({name:"",email:"",photoURL:""})
  const login=()=>{
    signInWithPopup(authentication, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("creds",credential)
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setSucess(true)
        // IdP data available using getAdditionalUserInfo(result)
        registerUser(user.reloadUserInfo.displayName,user.reloadUserInfo.email,user.reloadUserInfo.photoUrl)
        // setuserInfo({ name: user.reloadUserInfo.displayName, email: user.reloadUserInfo.email,photoURL:user.reloadUserInfo.photoUrl })
        
        setSucess(true)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
 
  return (
    <div class="px-6 sm:px-0 max-w-sm">
      <button onClick={login} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
    </div>
  )
}

export default index