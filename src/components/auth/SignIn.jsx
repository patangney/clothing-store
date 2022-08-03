import React, {Fragment} from 'react'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }
  return (
    <Fragment>
      <div className='sign-in'>
        <h2>Sign In</h2>
        <button onClick={logGoogleUser}>Sign In With Google</button>
      </div>
    </Fragment>
  )
}

export default SignIn