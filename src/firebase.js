import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDE4ogF7AgcrMsTKKds9OMXY4tF7K29vc8",
    authDomain: "app11-4b504.firebaseapp.com",
    projectId: "app11-4b504",
    storageBucket: "app11-4b504.appspot.com",
    messagingSenderId: "10228930981",
    appId: "1:10228930981:web:c86e3f4ae5f3eef0d7b04c"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}