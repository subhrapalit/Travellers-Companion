import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "../pages/Login/Firebase/firebase.init";


intializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // const signInUsingGoogle = () => {
    //     setIsLoading(true);
    //     const googleProvider = new GoogleAuthProvider();
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             setUser(result.user);

    //         })
    //         .finally(() => setIsLoading(false));
    // }

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        logOut

    }
}

export default useFirebase;