import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "./Card";
import Search from "./Search";
import { getUser } from "../../api/users";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();

  const user = async () => {
    try {
      const data = await getUser("andres");
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user();

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
