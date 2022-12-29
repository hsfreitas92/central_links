import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLTS2hSPGqW4ybLaS4JLLBN0wH9WueKKk",
  authDomain: "centrallinks.firebaseapp.com",
  projectId: "centrallinks",
  storageBucket: "centrallinks.appspot.com",
  messagingSenderId: "266256967938",
  appId: "1:266256967938:web:2faf4e66f144c8e9763a1b",
  measurementId: "G-NTPMJY2NPG"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };