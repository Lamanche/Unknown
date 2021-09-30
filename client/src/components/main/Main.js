import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "./Card";
import Search from "./Search";
import { getUser } from "../../api/users";
import useGetData from "./utils/useGetData";
import auth from "../../firebase";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();
  //const { loading, error, apiData } = useGetData(getUser("andres"));
  //console.log(auth.currentUser);

  const user = async () => {
    console.log(auth.currentUser);
    try {
      const data = await getUser("andres");
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*useEffect(() => {
    //user();
    //const data = getData(() => getUser("andres"));
    //getData(() => getUser("andres"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

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
      <button onClick={user}>Mingi nupp</button>
    </main>
  );
};

export default Main;
