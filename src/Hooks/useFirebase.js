import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
// import {reg, regString} from "../utilities/regex";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState({})
    const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();

    // const registerUser = (email, password, phone, name) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             // add user informations into the database, like userId, name, address, phone number, 
    //             fetch('https://mighty-brushlands-10685.herokuapp.com/newUser', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     "uid": user.uid,
    //                     "fullname": name,
    //                     "email": email,
    //                     "password": password,
    //                     "phone": phone,
    //                     "adminStatus": false
    //                 })
    //             })
    //         })
    //         .then(() => {
    //             alert("Registered")
    //         })
    //         .catch((error) => {
    //             // alert();
    //             alert(JSON.stringify(error));
    //         });
    // }

    // const logIn = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //         })
    //         .catch((error) => {
    //             // const errorCode = error.code;
    //             // const errorMessage = error.message;
    //             alert(`${error.meessage}`);
    //         });
    // }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user)
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        //use to check if admin status is turned on
        if (user) {
            fetch(`https://mighty-brushlands-10685.herokuapp.com/user/${user.uid}`)
                .then(res => res.json())
                .then(data => {
                    setUserDetails(data)
                })
        }
        else {
            setUserDetails({})
        }
    }, [user])

    return {
        user,
        loading,
        // logIn,
        // registerUser,
        logOut,
        userDetails
    }
}

export default useFirebase;