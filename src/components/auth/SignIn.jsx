import React, { Fragment, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase'

import SignUpForm from './SignUpForm'

const SignIn = () => {
  // useEffect(() => {
  //   async function getResponse() {
  //     const response = await getRedirectResult(auth)
  //     if(response) {
  //       const userDocRef = await createUserDocFromAuth(response.user)
  //     }
  //   }
  //   getResponse() //disable fn for now | using it for learning
    
  // }, [])
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <Fragment>
      <div className='sign-in'>
        <h2>Sign In</h2>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        {/* <button onClick={signInWithGoogleRedirect}>
          Sign In With Google Redirect
        </button> */}
        <SignUpForm />
      </div>
      
    </Fragment>
  )
}

export default SignIn
