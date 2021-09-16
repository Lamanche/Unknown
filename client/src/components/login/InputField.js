import React from "react";

const InputField = ({ name, type, placeholder, formik }) => {
  return (
    <div className='relative flex flex-col'>
      <input
        //required
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className='focus:outline-none w-full box-border mb-4 border p-2 transition-shadow duration-100 ease-in-out border-gray-300 hover:shadow'
      />
      {formik.touched[name] && formik.errors[name] ? (
        <span
          className='absolute bottom-0 text-left ml-2  text-red-600 text-sm font-medium
         tracking-wide'
        >
          {formik.errors[name]}
        </span>
      ) : null}
    </div>
  );
};

export default InputField;
