import React from "react";

const Button = ({ name, type, action, loading, logo }) => {
  return (
    <button
      disabled={loading}
      type={type}
      onClick={action}
      className='w-full h-11 border-gray-300 border bg-gray-50 transition-shadow duration-100 ease-in-out hover:shadow'
    >
      {loading ? (
        "Loading"
      ) : (
        <div className={"flex w-full h-6 justify-center"}>
          {logo && <img src={logo} alt='provider logo' className={"mr-1"} />}
          {name}
        </div>
      )}
    </button>
  );
};

export default Button;
