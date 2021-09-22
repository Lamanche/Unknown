import React from "react";
import { useAuth } from "../../context/AuthContext";

const Card = () => {
  const { currentUser } = useAuth();

  return (
    <div className='bg-gray-50 w-44 p-4 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 '>
      <img
        src={currentUser.photoURL}
        alt='profile-pic'
        className='w-full mb-4'
      />
      <div className='w-full f-full text-center'>
        <h1 className='text-red-700 font-medium tracking-tight'>Unknown</h1>
      </div>
    </div>
  );
};

export default Card;
