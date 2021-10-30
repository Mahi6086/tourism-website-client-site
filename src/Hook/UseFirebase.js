import React, { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  /* createUserWithEmailAndPassword,
    signInWithEmailAndPassword, */
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const UseFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [isLoading, setLoading] = useState(true);

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    setLoading(true);

    return (
      signInWithPopup(auth, provider)
        // .then((result) => {
        //   setUser(result.user);
        //   // console.log(result.user);
        //   setError("");
        // })
        //
        .finally(() => setLoading(false))
    );
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  return {
    isLoading,
    handleGoogleLogin,
    user,
    handleLogout,
    // handleUserRegister,
    // handleUserLogin,
  };
};

export default UseFirebase;
