import {
  getAuth,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
// import {reg, regString} from "../utilities/regex";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // const [userDetails, setUserDetails] = useState({});
  const auth = getAuth();
  const fbProvider = new FacebookAuthProvider();
  
  // Maybe important maybe not
  fbProvider.addScope("public_profile");

  const fbAuth = () => {
    console.log("Clicked");
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result;
        console.log("First");
        console.log(result);
        setUser(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // TODO: Use Facebook API to fetch birthday and profile picture
        // Link to the disaster: https://stackoverflow.com/questions/37372150/firebase-3-javascript-get-facebook-accesstoken-after-login
        // and : https://firebase.google.com/support/guides/firebase-web#get_the_access_token_numbered
        // "Since Firebase Authentication no longer persists the access token, your application will have to do so itself, if needed."
        // BUT these lines indeed work but just inside this Promise
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;

        // TODO: Save the access token to some database
        // If users want to see their profile pictures after that they'll have to re-login after a brief logout

        // ...
      })
      .catch((error) => {
        // console.log("Failed to sign in");
        alert("Failed to sign in");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(`${user.photoURL}?access_token=${fetchToken()}`);
        console.log("Logged In");
      } else {
        setUser({});
        console.log("Logged Out");
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    //use to check if admin status is turned on or off or if the user even exists in user space
    if (user) {
      // fetch(`https://mighty-brushlands-10685.herokuapp.com/user/${user.uid}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setUserDetails(data);
      //   });
      console.log("Found user");
    } else {
      // setUserDetails({});
      console.log("Can't find user");
    }
  }, [user]);

  return {
    user,
    loading,
    logOut,
    fbAuth,
  };
};

export default useFirebase;
