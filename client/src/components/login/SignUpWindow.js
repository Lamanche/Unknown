import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateSignUp as validate} from "./utils/validateSignUp";
import InputField from "./InputField";
import { useAuth } from "../../context/AuthContext";

const SignUpWindow = ({ setInSignIn }) => {
  const { signUp } = useAuth();
  const history = useHistory();

  const submit = async () => {    
    try {
      const res = await signUp(formik.values.email, formik.values.password);
      console.log(res);
      history.replace('/')
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatePassword: ''
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
        <button type='submit' className=' h-11 bg-gray-300 mt-5'>
          Join
        </button>
        <button onClick={toSignIn} className={"mt-3 flex"}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpWindow;
