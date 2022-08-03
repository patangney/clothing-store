// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBctRvBJrw8c3_F5zyiWuvXnLb_o9wW1Zs',
  authDomain: 'react-crowndb.firebaseapp.com',
  projectId: 'react-crowndb',
  storageBucket: 'react-crowndb.appspot.com',
  messagingSenderId: '693727304948',
  appId: '1:693727304948:web:73749ad697e20278b112a1',
  measurementId: 'G-X5PCKYY2JM'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const provider = new GoogleAuthProvider() // GoogleAuthProvider is a class connected to Auth API | you can have multiple providers for different providers
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const database = getFirestore()

export const createUserDocFromAuth = async authUser => {
  //fn that will take data form auth service and store inside firestore
  const userDocRef = doc(database, 'users', authUser.uid)
  console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef)
  //create pattern if user does exist or not in firestore | .exists() returns true or false boolean
    console.log(userSnapShot.exists())

    //if user does not exist, create user
    //create / set the document with the user data from userAuth in my collection
    if (!userSnapShot.exists()) {
        const { displayName, email } = authUser
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...authUser.providerData[0] //providerData is an array of objects | we want the first object in the array
            })
        } catch (error) {
            console.error('error creating user ', error)
        }

    } 

    //if user does exist, return user doc ref
    return getDoc(userDocRef)

}
