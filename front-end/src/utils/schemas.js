import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Pleases enter your name')
    .min(8, `Name can't be less than 8 characters`)
    .trim(),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email')
    .trim(),
  password: Yup.string()
    .required('Please enter a password')
    .min(8, `Password can't be less than 8 characters`)
    .trim(),
  passwordConfirmation: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
  password: Yup.string().required('Please enter your password'),
  remember: Yup.boolean().oneOf([true, false]),
});
