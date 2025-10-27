import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser =(user,updatedData)=>{
        return updateProfile(user, updatedData);
    }
    const passWordReset = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authData = {
        createUser,
        loginUser,
        updateUser,
        signOutUser,
        passWordReset,
        setUser,
        user,
        loading,
        setLoading,
        googleSignIn,
    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;