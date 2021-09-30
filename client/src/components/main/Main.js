import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Card from "./Card";
import Search from "./Search";
import { getUser } from "../../api/users";
import useDataExchange from "./utils/useDataExchange";

const Main = () => {
  const { signOut, currentUser } = useAuth();
  const history = useHistory();
  const { loading, error, apiData, setAction } = useDataExchange();

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
      {loading && <h1>Loading...</h1>}
      {apiData && <h1>{apiData}</h1>}
      {error && <h1>{error}</h1>}
      <Card />
      <button onClick={leave}>Leave</button>
      <button onClick={() => setAction(getUser("andres"))}>Mingi nupp</button>
    </main>
  );
};

export default Main;
