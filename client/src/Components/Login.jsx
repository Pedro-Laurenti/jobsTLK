import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <button className='bg-appBlue-500 px-8 py-2 text-white' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login