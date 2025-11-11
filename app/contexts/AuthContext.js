"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // `undefined` = still loading/initializing; `null` = explicitly not signed in
  const [user, setUser] = useState(undefined);

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    if (!auth) {
      // If Firebase auth isn't initialized, mark as not signed in.
      setUser(null);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // currentUser will be `null` if the user is signed out.
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
