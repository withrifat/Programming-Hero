import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithCredential(auth, email, password);
  };
  const signOutUser = () =>{
    return signOut(auth);
  }
  // get current uer info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // mount the observer
      console.log('current user in auth state change', currentUser);
      setUser(currentUser);
    });
    return () => { // clear the observer on unmount 
      unsubscribe();
    };
  }, []); // [ dependency array ]
  
  const authInfo = {
    user,
    createUser,
    signInUser,
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

