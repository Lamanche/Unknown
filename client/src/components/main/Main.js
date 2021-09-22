import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "./Card";
import Search from "./Search";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log(currentUser);
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
    <main className='w-full'>
      <h1>Hello, {currentUser.displayName}</h1>
      <Search />
      <Card />
      <button onClick={leave}>Leave</button>
    </main>
  );
};

export default Main;
