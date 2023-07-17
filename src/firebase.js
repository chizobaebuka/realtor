// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk05W4lekhfeluVRaVyXNKJ-zzS8Mtb00",
  authDomain: "realtor-clone-ac323.firebaseapp.com",
  projectId: "realtor-clone-ac323",
  storageBucket: "realtor-clone-ac323.appspot.com",
  messagingSenderId: "760558016798",
  appId: "1:760558016798:web:1e3550a78058d56065510f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()