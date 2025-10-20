import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUer = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const passWordReset = (email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const signOutUser = () =>{
        return signOut(auth);
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
        // all authData,
        createUser,
        loginUer,
        updateUser,
        signOutUser,
        passWordReset,
        setUser,
        user,
        loading,
        setLoading,
    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;