import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }
  // get current uer info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // mount the observer
      console.log('current user in auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => { // clear the observer on unmount 
      unsubscribe();
    };
  }, []); // [ dependency array ]
  
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,

  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

// onAuthStateChanged(auth, (currentUser) => {
//   if (currentUser) {
  //       console.log("inside objerver if ", currentUser);
  
  //   } else {
//       console.log("else result");

//   }
// });

// get current uer info
//  step -1 : observer set
//  step -2 : Set in a variable
//  step -3 : Return and call the variable so that you can clear the ref

