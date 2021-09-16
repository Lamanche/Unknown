import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuth = (AuthContext) => {
  return useContext(AuthContext);
};

export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  /*const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };*/

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
