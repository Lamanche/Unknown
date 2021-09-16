import React from "react";
import { useFormik } from "formik";
import { validate } from "./utils/validate";
import InputField from "./InputField";
import { signUp } from "../../context/AuthContext";

const LoginWindow = () => {
  //const { signUp } = signUp();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const res = await signUp(formik.values.email, formik.values.password);
      console.log(res);
    },
  });

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
        <button type='submit' className=' h-11 bg-gray-300 mt-5'>
          Enter
        </button>
      </form>
    </div>
  );
};

export default LoginWindow;
