import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleProviderLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userLogOut = () => {
        return signOut(auth);
    }
    const updateUserInfo = profile => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInformation = {
        setLoading,
        loading,
        createUser,
        updateUserInfo,
        logInUser,
        userLogOut,
        googleProviderLogin,
        user
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;