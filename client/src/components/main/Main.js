import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "./Card";
import Search from "./Search";
import { getUser } from "../../api/users";
import useGetData from "./utils/useGetData";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();
  const { loading, error, apiData } = useGetData(getUser("andres"));

  /*const user = async () => {
    try {
      const data = await getUser("andres");
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };*/

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
      <button >Mingi nupp</button>
    </main>
  );
};

export default Main;
