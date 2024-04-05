import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = new createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: 'https://i.ibb.co/Y3tr5Xb/Shawon1-2.jpg'
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log('user in the auth -', currentUser)
            setUser(currentUser)
        }))
        return ()=>
            unSubscribe()
    }, [])



    const authInfo = {
        user,
        createUser,
        updateName
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;