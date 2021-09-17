import React, { useState } from "react";
import LoginWindow from "./LoginWindow";
import SignUpWindow from "./SignUpWindow";

const Login = () => {
  const [inSignIn, setInSignIn] = useState(true);
  return (
    <div className='min-h-full w-full flex items-center justify-center'>
      {inSignIn ? (
        <LoginWindow setInSignIn={setInSignIn} />
      ) : (
        <SignUpWindow setInSignIn={setInSignIn} />
      )}
    </div>
  );
};

export default Login;
