import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Authinit from "../Firebase/firebase.init";
Authinit();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const emailRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        googleSignIn,
        emailRegister,
        emailSignIn,
        logOut
    }
}

export default useFirebase;