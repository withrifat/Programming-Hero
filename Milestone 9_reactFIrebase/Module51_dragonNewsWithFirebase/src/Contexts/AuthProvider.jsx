import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUer = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passWordReset = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authData = {
        // all authData,
        createUser,
        loginUer,
        signOutUser,
        passWordReset,
        setUser,
        user,
    }

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;