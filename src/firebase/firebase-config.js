import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMUR1l-j00sKmV3ESsNyjx_85sEjrY_aw",
  authDomain: "journal-app-2cd36.firebaseapp.com",
  projectId: "journal-app-2cd36",
  storageBucket: "journal-app-2cd36.appspot.com",
  messagingSenderId: "770028451554",
  appId: "1:770028451554:web:5945aac1fe4c454d8310bb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  googleAuthProvider
}