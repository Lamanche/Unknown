import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log(currentUser)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const leave = async () => {
    try {
      await signOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
    <h1>Hello, {currentUser?.displayName}</h1>
      <button onClick={leave}>Leave</button>
    </main>
  );
};

export default Main;
