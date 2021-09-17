import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateSignIn as validate } from "./utils/validateSignIn";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";
import { errorCodes } from "./utils/errorCodes";

const LoginWindow = ({ setInSignIn }) => {
  const { signIn, signInWithGoogle } = useAuth();
  const history = useHistory();
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    setLoadingSignIn(true);
    try {
      await signIn(formik.values.email, formik.values.password);
      history.replace("/");
      setLoadingSignIn(false);
    } catch (error) {
      //console.log(error.code)
      setError(error.code);
      setLoadingSignIn(false);
    }
  };

  const googleSignIn = async () => {
    setError("");
    setLoadingGoogle(true);
    try {
      await signInWithGoogle();      
      history.replace("/");
      setLoadingGoogle(false);
    } catch (error) {
      //console.log(error.code)
      setError(error.code);
      setLoadingGoogle(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: submit,
  });

  const toSignUp = () => {
    setInSignIn(false);
  };

  return (
    <div className='relative w-full max-w-md min-h-96 z-10 p-8 bg-gray-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 text-center animate-fade'>
      <h1 className='mb-8 text-red-700 text-5xl tracking-tight'>Unknown</h1>

      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <InputField
          name='email'
          type='email'
          placeholder='Email'
          formik={formik}
        />
        <InputField
          name='password'
          type='password'
          placeholder='password'
          formik={formik}
        />

        <div className='relative mt-3 mb-2 text-center'>
          {loadingSignIn ? (
            <button
              disabled
              type='submit'
              className='w-full h-11 border bg-gray-300'
            >
              Loading
            </button>
          ) : (
            <button
              type='submit'
              className='w-full h-11 border bg-gray-300 transition-shadow duration-100 ease-in-out hover:shadow'
            >
              Enter
            </button>
          )}
        </div>
      </form>

      <div className='relative mt-3 mb-5 text-center'>
        {loadingGoogle ? (
          <button disabled type='submit' className='w-full h-11 border bg-gray-50'>
            Loading
          </button>
        ) : (
          <button
            onClick={googleSignIn}
            className='w-full h-11 border-solid border-black border- bg-gray-50 transition-shadow duration-100 ease-in-out hover:shadow'
          >
            Google Sign In
          </button>
        )}
      </div>
      <div className='text-right'>
        <button onClick={toSignUp} className=' text-gray-900 hover:text-black'>
          Register
        </button>
      </div>
      {error && (
        <div className='absolute'>
          <p className=' text-red-600 text-sm font-medium'>
            {errorCodes[error]}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginWindow;
