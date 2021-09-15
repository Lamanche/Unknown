import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LoginWindow = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='w-full max-w-md min-h-96 z-10 p-8 bg-gray-50 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 text-center animate-fade'>
      <h1 className='mb-8 text-red-700 text-5xl tracking-tight'>Unknown</h1>

      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <div className='relative flex flex-col'>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className='focus:outline-none w-full box-border mb-4 border p-2 transition-shadow duration-100 ease-in-out border-gray-300 hover:shadow'
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <span className='absolute bottom-2 text-left ml-2  text-red-500 text-sm font-medium tracking-wide'>
              {formik.errors.firstName}
            </span>
          ) : null}
        </div>

        <div className='relative flex flex-col'>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className='focus:outline-none w-full box-border mb-4 border p-2 transition-shadow duration-100 ease-in-out border-gray-300 hover:shadow'
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <span className='absolute bottom-2 text-left ml-2  text-red-500 text-sm font-medium tracking-wide'>
              {formik.errors.lastName}
            </span>
          ) : null}
        </div>

        <div className='relative flex flex-col'>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className='focus:outline-none w-full box-border mb-4 border p-2 transition-shadow duration-100 ease-in-out border-gray-300 hover:shadow'
          />
          {formik.touched.email && formik.errors.email ? (
            <span className='absolute bottom-2 text-left ml-2  text-red-500 text-sm font-medium tracking-wide'>
              {formik.errors.email}
            </span>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginWindow;
