import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateSignUp as validate } from "./utils/validateSignUp";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";
import { errorCodes } from "./utils/errorCodes";

const SignUpWindow = ({ setInSignIn }) => {
  const { signUp, getUser } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    setLoading(true);
    try {
      await signUp(formik.values.email, formik.values.password); 
      //await getUser.updateProfile({displayName: formik.values.userName})    
      history.replace("/");
      setLoading(false);
    } catch (error) {
      console.log(error.code);
      setError(error.code);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatePassword: "",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: submit,
  });

  const toSignIn = () => {
    setInSignIn(true);
  };

  return (
    <div className='w-full max-w-md min-h-96 z-10 p-8 bg-gray-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 text-center animate-fade'>
      <h1 className='mb-8 text-red-700 text-5xl tracking-tight'>Unknown</h1>

      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <InputField
          name='userName'
          type='text'
          placeholder='Username'
          formik={formik}
        />
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
        <InputField
          name='repeatePassword'
          type='password'
          placeholder='Repeate password'
          formik={formik}
        />
        <div className='relative mt-3 mb-5 text-center'>
          {loading ? (
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
              Join
            </button>
          )}
          </div>
      </form>
      <div className='text-left'>
        <button onClick={toSignIn} className=' text-gray-900 hover:text-black'>
          Sign In
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

export default SignUpWindow;
