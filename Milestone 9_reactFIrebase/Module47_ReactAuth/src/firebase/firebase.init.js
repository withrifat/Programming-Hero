// DO NOT send firebase config to repo

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8STz8MO4i8DPAf412n0HtKPfzRFUSYo",
  authDomain: "simple-firebase-auth-c80d8.firebaseapp.com",
  projectId: "simple-firebase-auth-c80d8",
  storageBucket: "simple-firebase-auth-c80d8.firebasestorage.app",
  messagingSenderId: "378543296769",
  appId: "1:378543296769:web:02b17150f779c14caf8b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);