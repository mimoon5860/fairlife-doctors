import React, { createContext } from 'react';
import useFirebase from '../firebaseAuth';

export const AuthContext = createContext();

const AuthProvidor = ({ children }) => {
    const firebaseAuth = useFirebase();
    return (
        <AuthContext.Provider value={firebaseAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;