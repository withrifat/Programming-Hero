
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9IgK4Sqz_gw0EPz9cZKMt27r3PFyd5Q",
  authDomain: "demorifat-e01b3.firebaseapp.com",
  projectId: "demorifat-e01b3",
  storageBucket: "demorifat-e01b3.firebasestorage.app",
  messagingSenderId: "257828879361",
  appId: "1:257828879361:web:2c66db0e532ce41cf51400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
