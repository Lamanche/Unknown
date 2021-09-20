import React, { useState, useEffect } from "react";
import LoginWindow from "./LoginWindow";
import SignUpWindow from "./SignUpWindow";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [inSignIn, setInSignIn] = useState(true);
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    currentUser && history.replace("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
