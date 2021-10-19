import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Authinit from "../Firebase/firebase.init";
Authinit();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    // Google sign in  
    const googleSignIn = () => {
        setIsLoading(false);
        return signInWithPopup(auth, googleProvider)

    }

    // Email Password Registation 
    const emailRegister = (email, password) => {
        setIsLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // Email Password Sign in 
    const emailSignIn = (email, password) => {
        setIsLoading(false);
        return signInWithEmailAndPassword(auth, email, password)

    }

    // Update user name 
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }


    // get current user for state change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, [])


    // for Log out user
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }
    return {
        user,
        googleSignIn,
        emailRegister,
        emailSignIn,
        updateUser,
        isLoading,
        setIsLoading,
        logOut
    }
}

export default useFirebase;