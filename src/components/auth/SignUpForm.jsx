import React, { Fragment, useState } from 'react'
import { createNewUserEmailPassword, createUserDocFromAuth } from '../../utils/firebase'
import './_signupform.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields) // destructure formFields, setFormFields
    const {displayName, email, password, confirmPassword} = formFields // destructure formFields
       // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})

    } // handleChange

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return
        } 

        try {
            const { user } = await createNewUserEmailPassword(email, password)
            await createUserDocFromAuth(user, {displayName})
            resetFormFields()
            
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use')

            }
            else {
                console.error('error creating user ', error)
            }
        }
            
        


    } // handleSubmit

  return (
    <Fragment>
      <div className='form'>
        <div className='form__header'>
          <h2>Sign Up with your email and password</h2>
          <p>Please fill out this form to create an account.</p>

          <form onSubmit={handleSubmit}>

            <div className='form__input'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='displayName' required onChange={handleChange} value={displayName} />
            </div>

            <div className='form__input'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required onChange={handleChange} value={email} />
            </div>

            <div className='form__input'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' required onChange={handleChange} value={password}  />
            </div>

            <div className='form__input'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                required
                onChange={handleChange}
                value={confirmPassword}
              />
            </div>

            <div className='form__input'>
                <button type='submit'>Sign Up</button>
            </div>

          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default SignUpForm
