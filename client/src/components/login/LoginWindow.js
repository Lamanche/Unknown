import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateSignIn as validate } from "./utils/validateSignIn";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";
import ErrorMessage from './ErrorMessage'
import Button from "./Button";
import googleLogo from '../../images/googleLogo.png'

const LoginWindow = ({ setInSignIn }) => {
  const { signIn, signInWithGoogle } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");
    setLoading(true);
    try {
      await signIn(formik.values.email, formik.values.password);
      history.replace("/");
      setLoading(false);
    } catch (error) {
      //console.log(error.code)
      setError(error.code);
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      history.replace("/");
      setLoading(false);
    } catch (error) {
      //console.log(error.code)
      setError(error.code);
      setLoading(false);
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
          <Button type={"submit"} name={"🔓  Sign in"} loading={loading} />
        </div>
      </form>

      <div className='relative mt-3 mb-5 text-center'>
        <Button
          name={"Sign in with Google"}
          loading={loading}
          action={googleSignIn}
          logo={googleLogo}
        />
      </div>
      <div className='text-right'>
        <button onClick={toSignUp} className=' text-gray-900 hover:text-black'>
          Register
        </button>
      </div>
      {error && (
        <ErrorMessage error={error} />
      )}
    </div>
  );
};

export default LoginWindow;
