// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQgF3SNBlj9X8eQC4H6cCKJtF5iw-4axY",
  authDomain: "backend-75148.firebaseapp.com",
  projectId: "backend-75148",
  storageBucket: "backend-75148.firebasestorage.app",
  messagingSenderId: "861459579292",
  appId: "1:861459579292:web:305e19587528a41b0a4859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
