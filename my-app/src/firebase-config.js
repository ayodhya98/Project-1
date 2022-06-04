// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_M8uH3vsEQjnI-Bb2SRuUnpUYpUlWnIg",
  authDomain: "ayodh2-dba7b.firebaseapp.com",
  projectId: "ayodh2-dba7b",
  storageBucket: "ayodh2-dba7b.appspot.com",
  messagingSenderId: "118117672624",
  appId: "1:118117672624:web:d155f4ac7250b6d065bd75",
  measurementId: "G-VFZ9R50D69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);