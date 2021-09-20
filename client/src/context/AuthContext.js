import React, { useContext, useState, useEffect, createContext } from "react";
import { auth, providerGoogle } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    return auth.signInWithPopup(providerGoogle);
  };

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = (email, password, userName) => {
    return auth.createUserWithEmailAndPassword(email, password).then((user) => {
      return auth.currentUser.updateProfile({ displayName: userName });
    });
  };

  const signOut = () => {
    return auth.signOut();
  };

  const getUser = () => {
    return auth.currentUser();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    signIn,
    signUp,
    signOut,
    getUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
