import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    

    const authInformation = {}

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;