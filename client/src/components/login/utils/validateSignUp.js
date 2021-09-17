export const validateSignUp = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }

  if (!values.repeatePassword) {
    errors.repeatePassword = "Required";
  } else if (values.password !== values.repeatePassword) {
    errors.repeatePassword = "Passwords don't match";
  }

  return errors;
};
