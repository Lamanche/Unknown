import React from "react";
import { errorCodes } from "./utils/errorCodes";

const ErrorMessage = ({ error }) => {
  return (
    <div className='absolute left-1/2 transform -translate-x-1/2'>
      <p className='text-red-600 text-sm font-medium'>{errorCodes[error]}</p>
    </div>
  );
};

export default ErrorMessage;
