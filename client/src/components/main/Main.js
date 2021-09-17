import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Main = () => {
  const { signOut } = useAuth();
  const history = useHistory();

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
      <button onClick={leave}>Leave</button>
    </main>
  );
};

export default Main;
