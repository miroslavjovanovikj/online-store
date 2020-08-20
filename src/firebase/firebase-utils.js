import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config={
    apiKey: "AIzaSyBKPJZpMtiDi6cobUhiAvGhxmlgzHkY9kI",
    authDomain: "my-project-1557185841921.firebaseapp.com",
    databaseURL: "https://my-project-1557185841921.firebaseio.com",
    projectId: "my-project-1557185841921",
    storageBucket: "my-project-1557185841921.appspot.com",
    messagingSenderId: "837875488100",
    appId: "1:837875488100:web:5e83ac0b4fbed191979671",
    measurementId: "G-3ZBC9RTR4Z"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;