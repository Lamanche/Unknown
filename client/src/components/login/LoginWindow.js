import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateSignIn as validate } from "./utils/validateSignIn";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";

const LoginWindow = ({ setInSignIn }) => {
  const { signIn } = useAuth();
  const history = useHistory();

  const submit = async () => {
    try {
      const res = await signIn(formik.values.email, formik.values.password);
      console.log(res);
      history.replace('/')
    } catch (error) {
      console.log(error.code);
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
    <div className='w-full max-w-md min-h-96 z-10 p-8 bg-gray-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 text-center animate-fade'>
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
        <button type='submit' className=' h-11 bg-gray-300 mt-5'>
          Enter
        </button>
        <button onClick={toSignUp} className={"mt-3 flex"}>
          Join
        </button>
      </form>
    </div>
  );
};

export default LoginWindow;
