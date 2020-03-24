import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBR5HaA6ezF9iosfMyrwbeGnI56hBoZpTg",
  authDomain: "hotel-red-onion.firebaseapp.com",
  databaseURL: "https://hotel-red-onion.firebaseio.com",
  projectId: "hotel-red-onion",
  storageBucket: "hotel-red-onion.appspot.com",
  messagingSenderId: "372259234488",
  appId: "1:372259234488:web:2b1dcbddcfb3e135a80a4d"
  };

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'Select a Account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;