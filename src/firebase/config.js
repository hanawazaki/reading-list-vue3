import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyAIhX-sDmIMu6lc7CxGR10fUD5apQSZSyk",

  authDomain: "reading-list-4dac9.firebaseapp.com",

  projectId: "reading-list-4dac9",

  storageBucket: "reading-list-4dac9.appspot.com",

  messagingSenderId: "264975207522",

  appId: "1:264975207522:web:819948a98244fbe704d53b"

};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth }