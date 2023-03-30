import React, { useEffect } from 'react';
import {FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup}from 'firebase/auth'
import { useRouter } from 'next/router';
function Login(props) {
    const router = useRouter()
    const auth = getAuth()
    useEffect(() => {
      const unsubcrise = auth.onIdTokenChanged(user=>{
        user && router.push('/')
      })
      return () => {
        unsubcrise()
      }
    }, [auth])
    const handleLoginWithGoogle = async()=>{
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth,provider)
    }
    const handleLoginWithFacebook = async()=>{
      try {
        const provider = new FacebookAuthProvider()
        const res = await signInWithPopup(auth,provider)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    return (
        <div>
            <div className='text-center'>
                <button title='google' className='text-primary bg-orange-600 p-2 rounded-sm hover:bg-orange-500 active:scale-90' onClick={handleLoginWithGoogle}>
                    Login with Google
                </button>
                <button title='facebook' className='text-primary bg-four p-2 rounded-sm hover:bg-blue-400 active:scale-90' onClick={handleLoginWithFacebook}>
                    Login with Facebook
                </button>
            </div>
        </div>
    );
}

export default Login;